const vins = {
  champagnes: [
    {
      id: "krug-gc",
      nom: "Krug Grande Cuvée",
      description: "Assemblage de plus de 120 vins de 10 années différentes",
      prix: "420€",
      region: "Champagne",
      annee: "NM",
    },
    {
      id: "cristal",
      nom: "Louis Roederer Cristal",
      description: "Notes d'agrumes confits, de fruits blancs et de minéralité",
      prix: "380€",
      region: "Champagne",
      annee: "2015",
    },
    {
      id: "dom-perignon",
      nom: "Dom Pérignon",
      description: "Équilibre parfait entre fraîcheur et maturité",
      prix: "350€",
      region: "Champagne",
      annee: "2012",
    },
  ],
  blancs: [
    {
      id: "montrachet",
      nom: "Montrachet Grand Cru",
      description:
        "Domaine de la Romanée-Conti, complexité et finesse exceptionnelles",
      prix: "890€",
      region: "Bourgogne",
      annee: "2019",
    },
    {
      id: "chablis",
      nom: "Chablis Grand Cru Les Clos",
      description: "Domaine William Fèvre, minéralité et pureté remarquables",
      prix: "180€",
      region: "Bourgogne",
      annee: "2018",
    },
    {
      id: "condrieu",
      nom: "Condrieu La Doriane",
      description: "Guigal, arômes intenses d'abricot et de fleurs blanches",
      prix: "160€",
      region: "Rhône",
      annee: "2020",
    },
  ],
  rouges: [
    {
      id: "romanee-conti",
      nom: "Romanée-Conti Grand Cru",
      description: "Le plus prestigieux des vins de Bourgogne",
      prix: "2500€",
      region: "Bourgogne",
      annee: "2018",
    },
    {
      id: "petrus",
      nom: "Château Pétrus",
      description: "Puissance et élégance du Merlot à son apogée",
      prix: "4200€",
      region: "Bordeaux",
      annee: "2015",
    },
    {
      id: "latour",
      nom: "Château Latour",
      description:
        "Premier Grand Cru Classé, complexité et longueur exceptionnelles",
      prix: "1200€",
      region: "Bordeaux",
      annee: "2010",
    },
    {
      id: "hermitage",
      nom: "Hermitage La Chapelle",
      description: "Paul Jaboulet Aîné, profondeur et complexité de la Syrah",
      prix: "320€",
      region: "Rhône",
      annee: "2017",
    },
  ],
  digestifs: [
    {
      id: "cognac-richard-hennessy",
      nom: "Cognac Richard Hennessy",
      description: "Assemblage de plus de 100 eaux-de-vie exceptionnelles",
      prix: "180€",
      region: "Cognac",
      volume: "4cl",
    },
    {
      id: "armagnac-1965",
      nom: "Armagnac Château de Laubade 1965",
      description: "Complexité aromatique unique, notes de fruits confits",
      prix: "95€",
      region: "Armagnac",
      volume: "4cl",
    },
  ],
};

export default function CarteVins() {
  return (
    <section id="vins" className="py-24 bg-[rgb(var(--dark))]">
      <div className="container-custom">
        <h2 className="text-center font-playfair text-4xl mb-16">
          Notre <span className="text-gold">Cave</span>
        </h2>

        {/* Champagnes */}
        <div className="mb-16">
          <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-8">
            CHAMPAGNES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vins.champagnes.map((vin) => (
              <div key={vin.id} className="menu-card p-6 hover-lift">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl">{vin.nom}</h4>
                  <span className="menu-price">{vin.prix}</span>
                </div>
                <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat mb-2">
                  {vin.description}
                </p>
                <div className="flex justify-between text-xs text-gold">
                  <span>{vin.region}</span>
                  <span>{vin.annee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vins Blancs */}
        <div className="mb-16">
          <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-8">
            VINS BLANCS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vins.blancs.map((vin) => (
              <div key={vin.id} className="menu-card p-6 hover-lift">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl">{vin.nom}</h4>
                  <span className="menu-price">{vin.prix}</span>
                </div>
                <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat mb-2">
                  {vin.description}
                </p>
                <div className="flex justify-between text-xs text-gold">
                  <span>{vin.region}</span>
                  <span>{vin.annee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vins Rouges */}
        <div className="mb-16">
          <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-8">
            VINS ROUGES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vins.rouges.map((vin) => (
              <div key={vin.id} className="menu-card p-6 hover-lift">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl">{vin.nom}</h4>
                  <span className="menu-price">{vin.prix}</span>
                </div>
                <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat mb-2">
                  {vin.description}
                </p>
                <div className="flex justify-between text-xs text-gold">
                  <span>{vin.region}</span>
                  <span>{vin.annee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digestifs */}
        <div>
          <h3 className="text-gold text-center font-montserrat text-sm tracking-[0.3em] mb-8">
            DIGESTIFS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vins.digestifs.map((digestif) => (
              <div key={digestif.id} className="menu-card p-6 hover-lift">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl">{digestif.nom}</h4>
                  <span className="menu-price">{digestif.prix}</span>
                </div>
                <p className="text-[rgba(var(--text-light),0.7)] text-sm font-montserrat mb-2">
                  {digestif.description}
                </p>
                <div className="flex justify-between text-xs text-gold">
                  <span>{digestif.region}</span>
                  <span>{digestif.volume}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
