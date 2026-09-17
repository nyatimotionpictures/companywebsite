import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from "../../2-Components/Footer/Footer";
import ContactFooter from "../../2-Components/Footer/ContactFooter";
import PDHero from "./PDHero";
import PDContent from "./PDContent";

const ProdDetailPage = () => {
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">
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
