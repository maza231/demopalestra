/**
 * DATI DELLA PALESTRA — punto unico di modifica.
 * Sostituisci i valori segnaposto qui sotto con quelli reali:
 * nome, telefono, WhatsApp, indirizzo, orari, social, immagini.
 * Tutto il resto del sito legge da questo file.
 */

export const site = {
  // --- Identità ---
  name: "Nome Palestra",
  tagline: "La tua forza, ogni giorno",
  city: "Città",

  // --- Contatti ---
  // Telefono in formato leggibile (mostrato a schermo)
  phone: "+39 000 000 0000",
  // WhatsApp in formato internazionale SENZA "+" e senza spazi (es. 393331234567)
  whatsapp: "390000000000",
  // Messaggio precompilato quando si apre WhatsApp
  whatsappMessage:
    "Ciao! Ho visto il sito e vorrei informazioni sugli abbonamenti.",
  email: "info@nomepalestra.it",

  // --- Sede ---
  address: "Via Esempio 1, 00000 Città (PR)",
  // Link Google Maps per "Indicazioni" / "Vieni a trovarci"
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=palestra",
  // URL embed della mappa (sostituisci con quello reale da Google Maps > Condividi > Incorpora)
  mapsEmbedUrl:
    "https://www.google.com/maps?q=palestra&output=embed",

  // --- Social (lascia stringa vuota per nascondere) ---
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // --- Orari di apertura ---
  hours: [
    { day: "Lunedì – Venerdì", time: "06:00 – 22:00" },
    { day: "Sabato", time: "08:00 – 20:00" },
    { day: "Domenica", time: "09:00 – 13:00" },
  ],
} as const;

// --- Vantaggi / Perché sceglierci ---
export const features = [
  {
    icon: "dumbbell",
    title: "Attrezzature di ultima generazione",
    text: "Sala pesi e macchinari moderni, sempre revisionati e puliti.",
  },
  {
    icon: "users",
    title: "Corsi per tutti i livelli",
    text: "Dal principiante all’atleta: programmi su misura per ogni obiettivo.",
  },
  {
    icon: "heart",
    title: "Staff qualificato",
    text: "Istruttori certificati che ti seguono passo dopo passo.",
  },
  {
    icon: "clock",
    title: "Orari ampi",
    text: "Aperti dalle 6 alle 22: ti alleni quando vuoi, senza stress.",
  },
] as const;

// --- Corsi & Servizi ---
export const services = [
  {
    title: "Sala Pesi",
    text: "Spazio ampio, postazioni complete e pesi liberi per ogni gruppo muscolare.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Functional Training",
    text: "Allenamenti dinamici a corpo libero e con attrezzi per forza e mobilità.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corsi di Gruppo",
    text: "Spinning, HIIT, pilates e tanto altro: motivazione ed energia di squadra.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Personal Training",
    text: "Un coach dedicato e un programma costruito sui tuoi obiettivi reali.",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
  },
] as const;

// --- Abbonamenti / Prezzi (i prezzi sono indicativi: modificali) ---
export const plans = [
  {
    name: "Open",
    price: "39",
    period: "/mese",
    description: "Accesso libero alla sala pesi e all’area cardio.",
    perks: ["Sala pesi e cardio", "Spogliatoi e docce", "Nessun vincolo orario"],
    highlighted: false,
  },
  {
    name: "Full",
    price: "59",
    period: "/mese",
    description: "Tutto incluso: sala, corsi di gruppo e scheda personalizzata.",
    perks: [
      "Tutto del piano Open",
      "Corsi di gruppo illimitati",
      "Scheda personalizzata",
      "1 check-up mensile",
    ],
    highlighted: true,
  },
  {
    name: "Personal",
    price: "su misura",
    period: "",
    description: "Percorso 1-to-1 con personal trainer dedicato.",
    perks: ["Tutto del piano Full", "Personal trainer dedicato", "Piano nutrizionale"],
    highlighted: false,
  },
] as const;

// --- Gallery ---
export const gallery = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
] as const;

// --- Personal Trainer / Team ---
export const trainers = [
  {
    name: "Luca Bianchi",
    role: "Head Coach · Forza & Ipertrofia",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    bio: "Ex agonista di powerlifting, oggi guida il team tecnico della palestra.",
    experience: "12 anni di esperienza",
    specialties: ["Powerlifting", "Ricomposizione corporea", "Preparazione gare"],
  },
  {
    name: "Sara Conti",
    role: "Functional & Mobility",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    bio: "Appassionata di movimento naturale, rende ogni allenamento dinamico e divertente.",
    experience: "8 anni di esperienza",
    specialties: ["Functional training", "Mobilità", "Postura"],
  },
  {
    name: "Marco Ferrari",
    role: "Personal Trainer · Dimagrimento",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    bio: "Specializzato in percorsi di dimagrimento sostenibili e motivazione costante.",
    experience: "10 anni di esperienza",
    specialties: ["Dimagrimento", "HIIT", "Educazione alimentare"],
  },
  {
    name: "Giulia Marino",
    role: "Pilates & Benessere",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    bio: "Porta in palestra equilibrio tra corpo e mente con un approccio attento a tutti.",
    experience: "9 anni di esperienza",
    specialties: ["Pilates", "Core stability", "Riabilitazione funzionale"],
  },
] as const;

// --- Testimonianze ---
export const testimonials = [
  {
    name: "Giulia R.",
    role: "Iscritta da 2 anni",
    text: "Ambiente pulito e staff super disponibile. Ho raggiunto obiettivi che non credevo possibili!",
  },
  {
    name: "Marco T.",
    role: "Functional training",
    text: "I corsi di gruppo sono fantastici, mi sono rimesso in forma divertendomi.",
  },
  {
    name: "Sara L.",
    role: "Personal training",
    text: "Il mio trainer mi segue in tutto. Risultati concreti e tanta motivazione.",
  },
] as const;
