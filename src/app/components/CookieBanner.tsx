"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté les cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgba(var(--dark),0.98)] backdrop-blur-xl border-t border-[rgba(var(--gold),0.2)] z-50 p-4 md:p-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm md:text-base text-[rgba(var(--text-light),0.9)] font-montserrat">
              Nous utilisons des cookies pour améliorer votre expérience sur
              notre site.
            </p>
            <p className="text-xs text-[rgba(var(--text-light),0.7)] font-montserrat">
              En continuant à naviguer, vous acceptez notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-gold hover:text-[rgb(var(--text-light))] transition-colors underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-[rgb(var(--gold))] text-[rgb(var(--dark))] rounded-lg hover:opacity-90 transition-opacity text-sm font-medium font-montserrat"
              type="button"
            >
              Accepter
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 border border-[rgba(var(--gold),0.3)] text-[rgb(var(--text-light))] rounded-lg hover:bg-[rgba(var(--gold),0.1)] transition-colors text-sm font-medium font-montserrat"
              type="button"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
