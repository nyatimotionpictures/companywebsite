import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from "../../2-Components/Footer/Footer";
import ContactFooter from "../../2-Components/Footer/ContactFooter";
import PDHero from "./PDHero";
import PDContent from "./PDContent";
import SEO from "../../2-Components/SEOHelmet/SEO";

const ProdDetailPage = () => {
  const prodSchema = {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    "name": "Conquer or Die: Uganda's Symbols of Independence",
    "description": "Conquer or Die is a historical live-action docuseries by Nyati Motion Pictures dramatizing the rich stories and symbols of Ugandan independence.",
    "url": "https://www.nyatimotionpictures.com/services/conquerordie",
    "productionCompany": {
      "@type": "Organization",
      "name": "Nyati Motion Pictures",
      "url": "https://www.nyatimotionpictures.com"
    }
  };

  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">
      <SEO 
        title="Conquer or Die | Historical Docuseries"
        description="Conquer or Die is a 5-season historical series by Nyati Motion Pictures exploring Uganda's symbols of independence and historical narratives."
        keywords="Conquer or Die, Nyati Motion Pictures, Ugandan historical series, Tuko Pamoja, African docuseries, Ugandan film production"
        url="https://www.nyatimotionpictures.com/services/conquerordie"
        structuredData={prodSchema}
      />
      <Navigation />

      <div className="flex flex-col w-full h-full gap-0 space-0">
        <PDHero />
        <PDContent />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
};

export default ProdDetailPage;
