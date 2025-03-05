import Link from "next/link";

export default function CGV() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h1 className="font-playfair text-4xl mb-12 text-center">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-12 max-w-4xl mx-auto font-montserrat">
          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">1. Objet</h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Les présentes Conditions Générales de Vente régissent les
                relations entre Le Délice Français et ses clients pour la
                réservation et la fourniture de prestations de restauration.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              2. Prix et Modalités de paiement
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Les prix sont indiqués en euros TTC. Le restaurant se réserve le
                droit de modifier ses prix à tout moment.
              </p>
              <p>Moyens de paiement acceptés :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cartes bancaires (Visa, Mastercard, American Express)</li>
                <li>Espèces</li>
                <li>Tickets restaurant</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              3. Réservations
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>La réservation peut être effectuée :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Par téléphone</li>
                <li>Par email</li>
                <li>Sur notre site internet</li>
              </ul>
              <p>
                Pour les groupes de plus de 8 personnes, un acompte de 30%
                pourra être demandé.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              4. Annulation
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Toute annulation doit être effectuée au plus tard 24 heures
                avant l'heure de réservation.
              </p>
              <p>En cas d'annulation tardive ou de non-présentation :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Pour les particuliers : des frais pourront être facturés
                </li>
                <li>Pour les groupes : l'acompte sera conservé</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              5. Allergènes
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                La liste des allergènes est disponible sur demande. Il est de la
                responsabilité du client d'informer le personnel de toute
                allergie ou intolérance alimentaire.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              6. Responsabilité
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Le restaurant décline toute responsabilité en cas de perte ou de
                vol d'effets personnels dans l'établissement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              7. Droit applicable et litiges
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Les présentes CGV sont soumises au droit français. En cas de
                litige, une solution amiable sera recherchée avant toute action
                judiciaire.
              </p>
              <p>
                Conformément à l'article L. 612-1 du Code de la consommation,
                vous pouvez recourir gratuitement au service de médiation [Nom
                et coordonnées du médiateur].
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              8. Modification des CGV
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Le restaurant se réserve le droit de modifier les présentes CGV
                à tout moment. Les CGV applicables sont celles en vigueur au
                moment de la réservation.
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
