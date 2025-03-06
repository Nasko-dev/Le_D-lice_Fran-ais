import Link from "next/link";

export default function CGV() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h2 className="text-2xl font-playfair text-gold mb-6">
          Conditions Générales de Vente
        </h2>
        <p className="mb-4">
          Les présentes Conditions Générales de Vente s&apos;appliquent à toutes
          les prestations de restauration et services proposés par Le Délice
          Français.
        </p>
        <p className="mb-4">
          En effectuant une réservation, vous acceptez d&apos;être lié par ces
          conditions.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          1. Réservations
        </h3>
        <p className="mb-4">
          Les réservations peuvent être effectuées par téléphone, sur notre site
          web ou par e-mail. Une réservation n&apos;est confirmée qu&apos;après
          validation par notre équipe.
        </p>
        <p className="mb-4">
          Pour les groupes de plus de 8 personnes, un acompte de 30% pourra être
          demandé.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          2. Annulation et modification
        </h3>
        <p className="mb-4">
          Toute annulation doit être effectuée au moins 24 heures avant
          l&apos;heure de réservation. En cas d&apos;annulation tardive ou de
          non-présentation, Le Délice Français se réserve le droit de facturer
          des frais.
        </p>
        <p className="mb-4">
          Les modifications de réservation sont possibles sous réserve de
          disponibilité.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          3. Prix et paiement
        </h3>
        <p className="mb-4">
          Les prix indiqués sur notre carte et notre site web sont en euros,
          toutes taxes comprises.
        </p>
        <p className="mb-4">
          Nous acceptons les paiements par carte bancaire, espèces et tickets
          restaurant.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          4. Privatisation
        </h3>
        <p className="mb-4">
          La privatisation du restaurant est possible sur demande. Un devis
          personnalisé sera établi en fonction de vos besoins.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          5. Allergies et régimes spéciaux
        </h3>
        <p className="mb-4">
          Nous vous invitons à nous informer de toute allergie ou régime
          alimentaire spécifique lors de votre réservation.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          6. Droit applicable et litiges
        </h3>
        <p className="mb-4">
          Les présentes conditions sont soumises au droit français. En cas de
          litige, une solution amiable sera recherchée avant toute action
          judiciaire.
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
