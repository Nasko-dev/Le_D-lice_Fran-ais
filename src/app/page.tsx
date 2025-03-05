import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import JsonLd from "./components/JsonLd";
import CarteVins from "./components/CarteVins";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  const menu = {
    entrees: [
      {
        id: "foie-gras",
        nom: "Foie gras de canard maison",
        description: "Chutney de figues, pain brioché toasté et fleur de sel",
        prix: "24€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "saint-jacques",
        nom: "Noix de Saint-Jacques snackées",
        description: "Purée de panais à la vanille, chips de légumes",
        prix: "26€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "oeuf-truffe",
        nom: "Œuf parfait aux truffes",
        description: "Crème de champignons, émulsion de parmesan",
        prix: "22€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "tartare-saumon",
        nom: "Tartare de saumon aux agrumes",
        description: "Avocat, zestes de citron vert, herbes fraîches",
        prix: "20€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "soupe",
        nom: "Velouté de potimarron",
        description: "Éclats de châtaignes, crème montée à la truffe",
        prix: "18€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "salade",
        nom: "Salade de homard",
        description: "Mangue, avocat, vinaigrette aux agrumes",
        prix: "28€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1580953290404-ac60e26b07b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    plats: [
      {
        id: "boeuf-rossini",
        nom: "Filet de bœuf Rossini",
        description:
          "Foie gras poêlé, sauce au Porto, purée maison à la truffe",
        prix: "42€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "saint-pierre",
        nom: "Saint-Pierre rôti",
        description: "Artichauts, tomates confites, sauce vierge aux herbes",
        prix: "38€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "homard",
        nom: "Homard bleu en deux façons",
        description: "Queue rôtie et pinces en ravioles, bisque crémeuse",
        prix: "48€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1711989874707-6a5ffe1798c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "agneau",
        nom: "Carré d'agneau en croûte d'herbes",
        description: "Légumes de saison, jus corsé au romarin",
        prix: "40€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544524696-57f8d9770452?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "cabillaud",
        nom: "Cabillaud rôti au beurre demi-sel",
        description: "Risotto aux asperges, émulsion au parmesan",
        prix: "36€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "magret",
        nom: "Magret de canard au miel",
        description: "Légumes racines, réduction balsamique aux fruits rouges",
        prix: "34€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1572448862527-d3c904757de6?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "ris-veau",
        nom: "Ris de veau dorés",
        description: "Morilles, purée de céleri, jus de veau à la truffe",
        prix: "44€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "sole",
        nom: "Sole meunière",
        description:
          "Pommes de terre écrasées à l'huile d'olive, câpres croustillantes",
        prix: "46€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    desserts: [
      {
        id: "souffle-chocolat",
        nom: "Soufflé au chocolat grand cru",
        description: "Glace vanille de Madagascar",
        prix: "16€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "tarte-tatin",
        nom: "Tarte Tatin traditionnelle",
        description: "Crème fraîche d'Isigny, caramel au beurre salé",
        prix: "15€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "creme-brulee",
        nom: "Crème brûlée à la vanille",
        description: "Gousses de vanille de Madagascar",
        prix: "14€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1602982980218-09cf6dc32d66?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "millefeuille",
        nom: "Millefeuille à la vanille",
        description: "Crème légère, caramel coulant",
        prix: "15€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "fruits-rouges",
        nom: "Pavlova aux fruits rouges",
        description: "Meringue croustillante, crème mascarpone",
        prix: "16€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "mont-blanc",
        nom: "Mont Blanc revisité",
        description: "Crème de marrons, meringue, chantilly",
        prix: "15€",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  };

  return (
    <>
      <JsonLd />
      {/* Navigation */}
      <nav
        className="fixed w-full z-50 bg-[rgba(var(--dark),0.98)] border-b border-[rgba(var(--gold),0.2)] shadow-lg backdrop-blur-sm"
        aria-label="Navigation principale"
      >
        <div className="container-custom py-6">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-gold text-2xl md:text-3xl font-playfair hover:opacity-80 transition-opacity"
            >
              Le Délice Français
            </Link>
            <div className="hidden md:flex gap-12 font-montserrat text-sm tracking-wider items-center">
              <Link
                href="#menu"
                className="nav-link hover:text-gold transition-colors"
              >
                Menu
              </Link>
              <Link
                href="#vins"
                className="nav-link hover:text-gold transition-colors"
              >
                Carte des Vins
              </Link>
              <Link
                href="#reservation"
                className="nav-link hover:text-gold transition-colors"
              >
                Réservation
              </Link>
              <Link
                href="#contact"
                className="nav-link hover:text-gold transition-colors"
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen" aria-label="En-tête du site">
        <div className="absolute inset-0 img-overlay">
          <Image
            src="/hero.jpg"
            alt="Ambiance du restaurant"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6 fade-in">
            Le Délice Français
            <span className="block text-gold text-xl md:text-2xl mt-4 font-montserrat tracking-[0.3em]">
              PARIS
            </span>
          </h1>
          <p
            className="text-lg md:text-xl mb-12 max-w-xl fade-in font-montserrat"
            style={{ animationDelay: "0.4s" }}
          >
            Une expérience gastronomique authentiquement française
          </p>
          <Link
            href="#reservation"
            className="btn-primary px-12 py-4 text-sm font-montserrat tracking-widest slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            RÉSERVER UNE TABLE
          </Link>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-24 bg-[rgb(var(--dark-secondary))]"
        aria-label="Notre carte"
      >
        <div className="container-custom">
          <h2 className="text-center font-playfair text-4xl mb-16">
            Notre <span className="text-gold">Carte</span>
          </h2>

          {/* Entrées */}
          <div className="mb-16">
            <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-8">
              ENTRÉES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {menu.entrees.map((plat) => (
                <div key={plat.id} className="menu-card p-6 hover-lift">
                  <div className="relative h-48 mb-4 rounded overflow-hidden">
                    <Image
                      src={plat.image}
                      alt={plat.nom}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-playfair text-xl">{plat.nom}</h4>
                    <span className="menu-price">{plat.prix}</span>
                  </div>
                  <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat">
                    {plat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Plats Principaux */}
          <div className="mb-16">
            <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-12">
              PLATS PRINCIPAUX
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menu.plats.map((plat) => (
                <div key={plat.id} className="menu-card p-6 hover-lift">
                  <div className="relative h-48 mb-4 rounded overflow-hidden">
                    <Image
                      src={plat.image}
                      alt={plat.nom}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-playfair text-xl mb-2">{plat.nom}</h4>
                  <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat mb-4">
                    {plat.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="menu-price">{plat.prix}</span>
                    <div className="rating">{"★".repeat(plat.rating)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-8">
              DESSERTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {menu.desserts.map((plat) => (
                <div key={plat.id} className="menu-card p-6 hover-lift">
                  <div className="relative h-48 mb-4 rounded overflow-hidden">
                    <Image
                      src={plat.image}
                      alt={plat.nom}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-playfair text-xl">{plat.nom}</h4>
                    <span className="menu-price">{plat.prix}</span>
                  </div>
                  <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat">
                    {plat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carte des Vins */}
      <CarteVins />

      {/* Réservation */}
      <section
        id="reservation"
        className="py-24 bg-[rgb(var(--dark))]"
        aria-label="Réservations"
      >
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-playfair text-4xl mb-8">Réservations</h2>
            <div className="w-24 h-px bg-[rgb(var(--gold))] mx-auto mb-8" />
            <p className="text-[rgba(var(--text-light),0.9)] mb-12 font-montserrat">
              Pour une expérience gastronomique inoubliable
            </p>
            <div className="space-y-4">
              <Link
                href="tel:+33123456789"
                className="btn-secondary block w-full py-4 text-sm font-montserrat tracking-widest"
              >
                +33 1 23 45 67 89
              </Link>
              <Link
                href="mailto:reservations@delice-francais.fr"
                className="btn-secondary block w-full py-4 text-sm font-montserrat tracking-widest"
              >
                RÉSERVER PAR EMAIL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Informations */}
      <section
        id="contact"
        className="py-24 bg-[rgb(var(--dark-secondary))]"
        aria-label="Informations de contact"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="menu-card p-8">
              <h3 className="font-playfair text-2xl mb-6">Horaires</h3>
              <div className="space-y-4 font-montserrat">
                <p className="flex justify-between items-center">
                  <span>Lundi - Samedi</span>
                  <span className="text-gold">12:00 - 14:30</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Lundi - Samedi</span>
                  <span className="text-gold">19:00 - 23:00</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Dimanche</span>
                  <span className="text-gold">Fermé</span>
                </p>
              </div>
            </div>
            <div className="menu-card p-8">
              <h3 className="font-playfair text-2xl mb-6">Contact</h3>
              <div className="space-y-4 font-montserrat">
                <p>15 Rue de la Gastronomie</p>
                <p>75008 Paris, France</p>
                <p className="text-gold">+33 1 23 45 67 89</p>
                <p>contact@delice-francais.fr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[rgb(var(--dark))] border-t border-[rgba(var(--gold),0.1)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-playfair text-xl mb-4">Le Délice Français</h4>
              <p className="text-sm text-[rgba(var(--text-light),0.7)] font-montserrat">
                Restaurant gastronomique au cœur de Paris
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-[rgba(var(--text-light),0.7)] font-montserrat">
                <p>15 Rue de la Gastronomie</p>
                <p>75008 Paris</p>
                <p className="text-gold">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div>
              <h4 className="font-playfair text-xl mb-4">Navigation</h4>
              <div className="space-y-2 text-sm font-montserrat">
                <p>
                  <Link
                    href="#menu"
                    className="hover:text-gold transition-colors"
                  >
                    Menu
                  </Link>
                </p>
                <p>
                  <Link
                    href="#vins"
                    className="hover:text-gold transition-colors"
                  >
                    Carte des Vins
                  </Link>
                </p>
                <p>
                  <Link
                    href="#reservation"
                    className="hover:text-gold transition-colors"
                  >
                    Réservation
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-playfair text-xl mb-4">Horaires</h4>
              <div className="space-y-2 text-sm text-[rgba(var(--text-light),0.7)] font-montserrat">
                <p>Lundi - Samedi: 12:00 - 14:30</p>
                <p>Lundi - Samedi: 19:00 - 23:00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgba(var(--gold),0.1)] pt-8 text-center">
            <p className="text-sm text-[rgba(var(--text-light),0.7)] font-montserrat">
              © 2024 Le Délice Français. Tous droits réservés.
            </p>
            <div className="mt-4 space-x-4 text-sm text-[rgba(var(--text-light),0.7)] font-montserrat">
              <Link
                href="/mentions-legales"
                className="hover:text-gold transition-colors"
              >
                Mentions Légales
              </Link>
              <span>|</span>
              <Link
                href="/politique-confidentialite"
                className="hover:text-gold transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <span>|</span>
              <Link href="/cgv" className="hover:text-gold transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
