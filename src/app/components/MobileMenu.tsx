"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Empêcher le défilement du body quand le menu est ouvert
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="md:hidden">
      {/* Bouton hamburger */}
      <button
        onClick={toggleMenu}
        className="text-[rgb(var(--text-light))] p-2 z-50"
        aria-label="Menu mobile"
        type="button"
      >
        <div
          className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"
          style={{
            transform: isOpen ? "rotate(45deg) translate(2px, 8px)" : "none",
          }}
        />
        <div
          className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"
          style={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        <div
          className="w-6 h-0.5 bg-current transition-all duration-300"
          style={{
            transform: isOpen ? "rotate(-45deg) translate(2px, -8px)" : "none",
          }}
        />
      </button>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 bg-[rgb(var(--dark))] transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{ top: "35px" }}
      >
        <div className="flex flex-col items-center justify-start h-[calc(100vh-35px)] pt-12 pb-8 px-6 space-y-8 font-montserrat overflow-y-auto bg-[rgb(var(--dark))]">
          {/* Logo en haut du menu */}
          <div className="text-gold text-2xl font-playfair mb-8">
            Le Délice Français
          </div>

          {/* Séparateur décoratif */}
          <div className="w-16 h-px bg-gold opacity-50 mb-8" />

          {/* Liens de navigation */}
          <Link
            href="#menu"
            className="text-xl hover:text-gold transition-colors relative group"
            onClick={toggleMenu}
          >
            Menu
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#vins"
            className="text-xl hover:text-gold transition-colors relative group"
            onClick={toggleMenu}
          >
            Carte des Vins
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#reservation"
            className="text-xl hover:text-gold transition-colors relative group"
            onClick={toggleMenu}
          >
            Réservation
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#contact"
            className="text-xl hover:text-gold transition-colors relative group"
            onClick={toggleMenu}
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Séparateur décoratif */}
          <div className="w-16 h-px bg-gold opacity-50 my-8" />

          {/* Informations de contact */}
          <div className="text-center space-y-4">
            <p className="text-sm text-[rgba(var(--text-light),0.7)]">
              15 Rue de la Gastronomie
              <br />
              75008 Paris
            </p>
            <p className="text-gold">+33 1 23 45 67 89</p>
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
