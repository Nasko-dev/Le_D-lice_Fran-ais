import Link from "next/link";

export default function PolitiqueCookies() {
  return (
    <div className="pt-32 pb-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h2 className="text-2xl font-playfair text-gold mb-6">
          Politique de Cookies
        </h2>
        <p className="mb-4">
          Cette politique de cookies explique ce que sont les cookies, comment
          Le Délice Français les utilise, et quels sont vos choix concernant
          leur utilisation.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          1. Qu&apos;est-ce qu&apos;un cookie ?
        </h3>
        <p className="mb-4">
          Un cookie est un petit fichier texte placé sur votre ordinateur,
          tablette ou smartphone lorsque vous visitez un site web. Les cookies
          sont largement utilisés pour faire fonctionner les sites web ou les
          rendre plus efficaces, ainsi que pour fournir des informations aux
          propriétaires du site.
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          2. Comment utilisons-nous les cookies ?
        </h3>
        <p className="mb-4">
          Notre site utilise différents types de cookies pour les finalités
          suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement
            du site. Ils vous permettent de naviguer sur le site et
            d&apos;utiliser ses fonctionnalités.
          </li>
          <li>
            <strong>Cookies de performance :</strong> Collectent des
            informations anonymes sur la façon dont les visiteurs utilisent
            notre site, comme les pages les plus visitées.
          </li>
          <li>
            <strong>Cookies de fonctionnalité :</strong> Permettent au site de
            se souvenir des choix que vous faites (comme votre nom
            d&apos;utilisateur, votre langue) et fournissent des fonctionnalités
            améliorées.
          </li>
          <li>
            <strong>Cookies de ciblage :</strong> Enregistrent votre visite sur
            notre site, les pages que vous avez visitées et les liens que vous
            avez suivis pour rendre notre site plus pertinent pour vos intérêts.
          </li>
        </ul>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          3. Cookies tiers
        </h3>
        <p className="mb-4">
          Certains cookies sont placés par des services tiers qui apparaissent
          sur nos pages. Ils sont utilisés pour :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Analyser le trafic (Google Analytics)</li>
          <li>Intégrer des fonctionnalités de médias sociaux</li>
          <li>Permettre le système de réservation en ligne</li>
        </ul>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          4. Gestion des cookies
        </h3>
        <p className="mb-4">
          Vous pouvez contrôler et/ou supprimer les cookies comme vous le
          souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur
          votre ordinateur et vous pouvez configurer la plupart des navigateurs
          pour qu&apos;ils ne soient pas placés. Toutefois, si vous le faites,
          vous devrez peut-être ajuster manuellement certaines préférences
          chaque fois que vous visitez un site, et certains services et
          fonctionnalités peuvent ne pas fonctionner.
        </p>
        <p className="mb-4">
          Pour plus d&apos;informations sur la gestion des cookies, visitez{" "}
          <a
            href="https://www.allaboutcookies.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            www.allaboutcookies.org
          </a>
          .
        </p>

        <h3 className="text-xl font-playfair text-gold mt-8 mb-4">
          5. Modifications de notre politique de cookies
        </h3>
        <p className="mb-4">
          Nous pouvons mettre à jour cette politique de cookies de temps à
          autre. Nous vous encourageons à consulter régulièrement cette page
          pour rester informé des changements.
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
