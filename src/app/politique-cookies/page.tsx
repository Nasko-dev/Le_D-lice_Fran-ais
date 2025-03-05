import Link from "next/link";

export default function PolitiqueCookies() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h1 className="font-playfair text-4xl mb-12 text-center">
          Politique de Cookies
        </h1>

        <div className="space-y-12 max-w-4xl mx-auto font-montserrat">
          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              1. Qu'est-ce qu'un cookie ?
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal
                (ordinateur, tablette, mobile) lors de votre visite sur notre
                site. Il permet de mémoriser des informations relatives à votre
                navigation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              2. Les cookies que nous utilisons
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Notre site utilise uniquement des cookies essentiels :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookies de préférences</strong> : pour mémoriser vos
                  choix d'affichage (thème clair/sombre)
                </li>
                <li>
                  <strong>Cookies techniques</strong> : nécessaires au bon
                  fonctionnement du site
                </li>
                <li>
                  <strong>Cookie de consentement</strong> : pour mémoriser vos
                  préférences concernant les cookies
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              3. Durée de conservation
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>Les cookies que nous utilisons ont une durée de vie de :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies de préférences : 1 an</li>
                <li>Cookies techniques : durée de la session</li>
                <li>Cookie de consentement : 6 mois</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              4. Gestion des cookies
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Vous pouvez à tout moment modifier vos préférences concernant
                les cookies :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  En utilisant le bandeau de cookies présent sur notre site
                </li>
                <li>
                  En supprimant les cookies via les paramètres de votre
                  navigateur
                </li>
              </ul>
              <p className="mt-4">
                Pour en savoir plus sur la gestion des cookies selon votre
                navigateur :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Safari
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4 text-gold">
              5. Mise à jour
            </h2>
            <div className="space-y-4 text-[rgba(var(--text-light),0.9)]">
              <p>
                Nous nous réservons le droit de modifier cette politique de
                cookies à tout moment. La date de dernière mise à jour sera
                toujours indiquée en bas de page.
              </p>
              <p>Dernière mise à jour : Mars 2024</p>
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
