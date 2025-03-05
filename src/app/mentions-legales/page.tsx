import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h1 className="font-playfair text-4xl mb-12 text-center">
          Mentions Légales
        </h1>

        <div className="space-y-12 max-w-4xl mx-auto font-montserrat">
          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              1. Informations légales
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                <strong>Raison sociale :</strong> Le Délice Français SARL
              </p>
              <p>
                <strong>Siège social :</strong> 15 Rue de la Gastronomie, 75008
                Paris
              </p>
              <p>
                <strong>SIRET :</strong> XXX XXX XXX 00000
              </p>
              <p>
                <strong>Capital social :</strong> 50 000€
              </p>
              <p>
                <strong>Numéro TVA Intracommunautaire :</strong> FR XX XXX XXX
                XXX
              </p>
              <p>
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </p>
              <p>
                <strong>Email :</strong> contact@delice-francais.fr
              </p>
              <p>
                <strong>Directeur de la publication :</strong> [Nom du
                directeur]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              2. Hébergement
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA
                91789, USA
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              3. Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.)
                est protégé par le droit d'auteur. Toute reproduction ou
                représentation, totale ou partielle, est interdite sans
                autorisation préalable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              4. Protection des données personnelles
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition aux données personnelles vous
                concernant.
              </p>
              <p>
                Ces droits peuvent être exercés en nous contactant à :
                privacy@delice-francais.fr
              </p>
              <p>
                Pour plus d'informations sur la gestion de vos données
                personnelles, veuillez consulter notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-gold hover:underline"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              5. Cookies
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience
                utilisateur. Pour plus d'informations, consultez notre{" "}
                <Link
                  href="/politique-cookies"
                  className="text-gold hover:underline"
                >
                  Politique de cookies
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              6. Conditions générales de vente
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Les conditions générales de vente régissent l'ensemble des
                transactions effectuées sur ce site. Consultez nos{" "}
                <Link href="/cgv" className="text-gold hover:underline">
                  CGV
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              7. Médiation de la consommation
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Conformément à l'article L. 612-1 du Code de la consommation,
                nous proposons un dispositif de médiation de la consommation. Le
                médiateur est : [Nom et coordonnées du médiateur]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              8. Droit applicable
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="btn-secondary inline-block px-8 py-3">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
