import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h1 className="font-playfair text-4xl mb-12 text-center">
          Politique de Confidentialité
        </h1>

        <div className="space-y-12 max-w-4xl mx-auto font-montserrat">
          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              1. Collecte des données personnelles
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Préférences de réservation</li>
                <li>Historique des réservations</li>
                <li>Données de connexion et de navigation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              2. Utilisation des données
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gérer vos réservations</li>
                <li>
                  Vous contacter en cas de modification de votre réservation
                </li>
                <li>Personnaliser votre expérience</li>
                <li>Vous envoyer des newsletters (avec votre consentement)</li>
                <li>Améliorer nos services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              3. Base légale du traitement
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Nous traitons vos données sur les bases légales suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L'exécution du contrat (réservation)</li>
                <li>Votre consentement (newsletter)</li>
                <li>Notre intérêt légitime (amélioration des services)</li>
                <li>Nos obligations légales</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              4. Durée de conservation
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Nous conservons vos données pendant :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Données de réservation : 3 ans après la dernière réservation
                </li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
                <li>Données newsletter : jusqu'à désinscription</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              5. Vos droits
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à :
                privacy@delice-francais.fr
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              6. Sécurité des données
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Nous mettons en œuvre les mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre toute violation ou accès non autorisé.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              7. Transfert des données
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Vos données sont hébergées en Union Européenne. Aucun transfert
                hors UE n'est effectué, sauf obligation légale.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              8. Contact
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Pour toute question concernant notre politique de
                confidentialité :
              </p>
              <p>
                <strong>DPO :</strong> [Nom du DPO]
              </p>
              <p>
                <strong>Email :</strong> privacy@delice-francais.fr
              </p>
              <p>Vous pouvez également contacter la CNIL : www.cnil.fr</p>
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
