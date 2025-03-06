import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h2 className="text-2xl font-playfair text-gold mb-6">
          Mentions Légales
        </h2>
        <p className="mb-4">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l&apos;économie numérique, nous vous informons
          des mentions légales suivantes :
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          1. Éditeur du site
        </h3>
        <p className="mb-2">
          <strong>Raison sociale :</strong> Le Délice Français SARL
        </p>
        <p className="mb-2">
          <strong>Forme juridique :</strong> Société à responsabilité limitée
        </p>
        <p className="mb-2">
          <strong>Capital social :</strong> 50 000 €
        </p>
        <p className="mb-2">
          <strong>Siège social :</strong> 15 Rue de la Gastronomie, 75008 Paris
        </p>
        <p className="mb-2">
          <strong>SIRET :</strong> 123 456 789 00012
        </p>
        <p className="mb-2">
          <strong>N° TVA Intracommunautaire :</strong> FR 12 123456789
        </p>
        <p className="mb-2">
          <strong>Téléphone :</strong> +33 1 23 45 67 89
        </p>
        <p className="mb-2">
          <strong>Email :</strong> contact@delice-francais.fr
        </p>
        <p className="mb-2">
          <strong>Directeur de la publication :</strong> Jean Dupont, en qualité
          de gérant
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          2. Hébergement
        </h3>
        <p className="mb-2">
          <strong>Raison sociale :</strong> Vercel Inc.
        </p>
        <p className="mb-2">
          <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789,
          États-Unis
        </p>
        <p className="mb-2">
          <strong>Site web :</strong> https://vercel.com
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          3. Propriété intellectuelle
        </h3>
        <p className="mb-4">
          L&apos;ensemble du contenu de ce site (textes, images, vidéos, etc.)
          est la propriété exclusive du restaurant Le Délice Français ou de ses
          partenaires. Toute reproduction, distribution ou utilisation sans
          autorisation préalable constitue une contrefaçon passible de sanctions
          juridiques.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          4. Protection des données personnelles
        </h3>
        <p className="mb-4">
          Conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi Informatique et Libertés, vous disposez d&apos;un droit
          d&apos;accès, de rectification, d&apos;opposition et de suppression
          des données vous concernant. Pour exercer ces droits, veuillez nous
          contacter par email à l&apos;adresse : rgpd@delice-francais.fr.
        </p>
        <p className="mb-4">
          Pour plus d&apos;informations sur la gestion de vos données, veuillez
          consulter notre{" "}
          <Link
            href="/politique-confidentialite"
            className="text-gold hover:underline"
          >
            Politique de Confidentialité
          </Link>
          .
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          5. Cookies
        </h3>
        <p className="mb-4">
          Notre site utilise des cookies pour améliorer votre expérience de
          navigation. Pour en savoir plus, consultez notre{" "}
          <Link href="/politique-cookies" className="text-gold hover:underline">
            Politique de Cookies
          </Link>
          .
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          6. Loi applicable et juridiction
        </h3>
        <p className="mb-4">
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, les tribunaux français seront seuls compétents.
        </p>

        <p className="mt-8 text-sm text-[rgba(var(--text-light),0.7)]">
          Dernière mise à jour : 1er juin 2023
        </p>

        <div className="mt-12 text-center">
          <Link href="/" className="btn-secondary inline-block px-8 py-3">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
