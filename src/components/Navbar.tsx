"use client";

import { useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { MenuIcon, CloseIcon } from "@/components/Icons";
import { site } from "@/config/site";

const navLinks = [
  { href: "#servizi", label: "Corsi" },
  { href: "#team", label: "Team" },
  { href: "#abbonamenti", label: "Abbonamenti" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "bg-ink/95 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-white">
          {site.name}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <CTAButton variant="whatsapp" className="!px-5 !py-2.5 text-sm">
            WhatsApp
          </CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink md:hidden">
          <div className="space-y-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <CTAButton variant="whatsapp" fullWidth className="mt-3">
              Scrivici su WhatsApp
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
