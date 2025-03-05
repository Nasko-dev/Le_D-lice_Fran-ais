"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="md:hidden relative z-50">
      {/* Bouton hamburger */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-3 hover:bg-[rgba(var(--gold),0.1)] rounded-lg transition-colors"
        aria-label="Menu mobile"
        aria-expanded={isOpen}
        type="button"
      >
        <div
          className="w-7 h-0.5 bg-gold mb-2 transition-all duration-300"
          style={{
            transform: isOpen ? "rotate(45deg) translate(3px, 9px)" : "none",
          }}
        />
        <div
          className="w-7 h-0.5 bg-gold mb-2 transition-all duration-300"
          style={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        <div
          className="w-7 h-0.5 bg-gold transition-all duration-300"
          style={{
            transform: isOpen ? "rotate(-45deg) translate(3px, -9px)" : "none",
          }}
        />
      </button>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 bg-[rgba(var(--dark),0.97)] backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "81px" }}
        aria-label="Menu mobile"
      >
        <div className="flex flex-col items-center justify-start h-[calc(100vh-81px)] pt-12 pb-8 px-6 space-y-8 font-montserrat overflow-y-auto">
          {/* Logo en haut du menu */}
          <div className="text-gold text-2xl font-playfair mb-8">
            Le Délice Français
          </div>

          {/* Séparateur décoratif */}
          <div className="w-16 h-px bg-gold opacity-50 mb-8" />

          {/* Liens de navigation */}
          <nav
            className="flex flex-col items-center space-y-4 w-full"
            aria-label="Navigation principale"
          >
            <Link
              href="#menu"
              className="w-full py-4 text-center text-xl font-medium text-[rgb(var(--text-light))] bg-[rgba(var(--dark-secondary),0.8)] hover:text-gold hover:bg-[rgba(var(--gold),0.1)] rounded-lg transition-all duration-300 active:scale-95"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              href="#vins"
              className="w-full py-4 text-center text-xl font-medium text-[rgb(var(--text-light))] bg-[rgba(var(--dark-secondary),0.8)] hover:text-gold hover:bg-[rgba(var(--gold),0.1)] rounded-lg transition-all duration-300 active:scale-95"
              onClick={toggleMenu}
            >
              Carte des Vins
            </Link>
            <Link
              href="#reservation"
              className="w-full py-4 text-center text-xl font-medium text-[rgb(var(--text-light))] bg-[rgba(var(--dark-secondary),0.8)] hover:text-gold hover:bg-[rgba(var(--gold),0.1)] rounded-lg transition-all duration-300 active:scale-95"
              onClick={toggleMenu}
            >
              Réservation
            </Link>
            <Link
              href="#contact"
              className="w-full py-4 text-center text-xl font-medium text-[rgb(var(--text-light))] bg-[rgba(var(--dark-secondary),0.8)] hover:text-gold hover:bg-[rgba(var(--gold),0.1)] rounded-lg transition-all duration-300 active:scale-95"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>

          {/* Séparateur décoratif */}
          <div className="w-16 h-px bg-gold opacity-50 my-8" />

          {/* Informations de contact */}
          <div className="text-center space-y-4">
            <address className="text-sm text-[rgba(var(--text-light),0.9)] not-italic">
              15 Rue de la Gastronomie
              <br />
              75008 Paris
            </address>
            <a
              href="tel:+33123456789"
              className="block text-gold hover:text-[rgb(var(--text-light))] transition-colors py-2"
              aria-label="Appeler le restaurant"
            >
              +33 1 23 45 67 89
            </a>
          </div>

          {/* Theme Toggle en bas */}
          <div className="mt-auto pt-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
