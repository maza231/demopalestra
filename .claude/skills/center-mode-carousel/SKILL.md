---
name: center-mode-carousel
description: Costruisce un carosello immagini "center-mode" a loop infinito in React/Next.js + Tailwind, senza dipendenze esterne. Usalo quando serve uno slider con immagine centrale grande, laterali più piccole/oscurate, autoplay e loop continuo.
---

# Carosello center-mode a loop infinito (no dipendenze)

Pattern collaudato in questo progetto (`src/components/GallerySlider.tsx`). Riproducilo o adattalo invece di reinventarlo o di aggiungere librerie (swiper, embla, ecc.).

## Requisiti tipici che soddisfa
- Immagine **centrale grande**, le adiacenti più piccole (`scale-90`) e oscurate (velo `bg-ink opacity-45`).
- **Loop infinito**: anche sulla prima slide si vedono ai lati le ultime (e viceversa). Nessun "muro" agli estremi.
- **Autoplay** configurabile (prop `autoplayMs`, default 3000) con pausa su hover e su touch con ripresa automatica.
- Pallini indicatori + swipe. Frecce opzionali (qui rimosse su richiesta utente).

## Tecnica chiave: cloni + snap invisibile
1. **Triplica** l'array: `slides = [...images, ...images, ...images]`. Si parte dal set centrale (`pos = count`).
2. Centra la slide attiva **misurando** `offsetLeft`/`clientWidth` (non con percentuali fisse), così funziona con larghezze responsive:
   ```ts
   const target = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
   ```
   Applica `translateX(${-offset}px)` alla track con `transition-transform`.
3. Allo `onTransitionEnd`, se `pos` è finito su un clone (`pos < count || pos >= count*2`), **disattiva la transizione** e riporta `pos` al set centrale equivalente (`count + logical`). Il clone mostra la stessa immagine → lo snap è invisibile.
4. Riattiva la transizione con un **doppio `requestAnimationFrame`** dopo lo snap.

## Accorgimenti anti-scatto (importanti)
- Calcola l'offset in **`useLayoutEffect`** (isomorfico per SSR), non `useEffect`: aggiorna prima del repaint, così lo snap non sfarfalla.
- Limita le transizioni: track `transition-transform`, slide `transition-[transform,opacity]` (mai `transition-all`); aggiungi `will-change:transform`.
- Su touch: `onTouchStart` mette in pausa, poi un timer (~2,5s) fa ripartire l'autoplay; **non** lasciarlo in pausa per sempre.
- Pallini: per andare a una slide scegli la **direzione più breve** nel loop (`diff` normalizzato a ±count/2).

## Note
- Componente `"use client"`. Usa `next/image` con `fill` + `sizes`; `priority` solo sulla prima slide reale (`i === count`).
- Tutto il contenuto immagini arriva da `src/config/site.ts` (`gallery`).
