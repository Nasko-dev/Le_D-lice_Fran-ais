import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h2 className="text-2xl font-playfair text-gold mb-6">
          Politique de Confidentialité
        </h2>
        <p className="mb-4">
          Le restaurant Le Délice Français s&apos;engage à protéger votre vie
          privée et à traiter vos données personnelles conformément aux lois et
          réglementations en vigueur, notamment le Règlement Général sur la
          Protection des Données (RGPD).
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          1. Collecte des données personnelles
        </h3>
        <p className="mb-4">
          Nous collectons les données personnelles suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>
            Informations de réservation (date, heure, nombre de personnes)
          </li>
          <li>Préférences alimentaires et allergies (si communiquées)</li>
        </ul>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          2. Finalités du traitement
        </h3>
        <p className="mb-4">
          Vos données personnelles sont collectées et traitées pour les
          finalités suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Gestion des réservations</li>
          <li>Communication relative à votre visite</li>
          <li>Amélioration de nos services</li>
          <li>Envoi de newsletters (avec votre consentement)</li>
          <li>Respect de nos obligations légales</li>
        </ul>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          3. Base légale du traitement
        </h3>
        <p className="mb-4">
          Le traitement de vos données personnelles est fondé sur :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            L&apos;exécution du contrat lorsque vous effectuez une réservation
          </li>
          <li>
            Votre consentement pour l&apos;envoi de communications marketing
          </li>
          <li>Notre intérêt légitime à améliorer nos services</li>
          <li>Le respect de nos obligations légales</li>
        </ul>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          4. Durée de conservation
        </h3>
        <p className="mb-4">
          Nous conservons vos données personnelles uniquement pendant la durée
          nécessaire à la réalisation des finalités pour lesquelles elles ont
          été collectées, et conformément aux exigences légales et
          réglementaires.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          5. Destinataires des données
        </h3>
        <p className="mb-4">
          Vos données personnelles sont destinées à notre personnel autorisé.
          Elles peuvent également être partagées avec des prestataires de
          services tiers qui nous aident à exploiter notre site web et notre
          restaurant (système de réservation, hébergement, etc.).
        </p>
        <p className="mb-4">
          Nous nous assurons que ces tiers respectent la confidentialité et la
          sécurité de vos données et qu&apos;ils les utilisent uniquement dans
          le cadre des services qu&apos;ils nous fournissent.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          6. Vos droits
        </h3>
        <p className="mb-4">
          Conformément à la réglementation applicable, vous disposez des droits
          suivants :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Droit d&apos;accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d&apos;opposition</li>
          <li>Droit à la portabilité de vos données</li>
        </ul>
        <p className="mb-4">
          Pour exercer ces droits, veuillez nous contacter à l&apos;adresse
          email suivante : rgpd@delice-francais.fr
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          7. Sécurité des données
        </h3>
        <p className="mb-4">
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre la
          destruction, la perte, l&apos;altération ou l&apos;accès non autorisé.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          8. Cookies
        </h3>
        <p className="mb-4">
          Notre site utilise des cookies pour améliorer votre expérience de
          navigation. Pour plus d&apos;informations, veuillez consulter notre{" "}
          <Link href="/politique-cookies" className="text-gold hover:underline">
            Politique de Cookies
          </Link>
          .
        </p>

        <p className="mt-8 text-sm text-[rgba(var(--text-light),0.7)]">
          Dernière mise à jour : 1er juin 2023
        </p>

        <div className="mt-12 text-center">
          <Link href="/" className="btn-secondary inline-block px-8 py-3">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
