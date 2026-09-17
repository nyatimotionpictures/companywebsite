import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import OurTeam from "./2OurTeam";
import ContentSection from "../9Team/3ContentSection";
import ContactFooter from "../../2-Components/Footer/ContactFooter";
import Footer from "../../2-Components/Footer/Footer";
import SEO from '../../2-Components/SEOHelmet/SEO';

const Team = () => {
  const teamSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
    "url": "https://www.nyatimotionpictures.com/team",
    "telephone": "+256 778 787 660",
    "email": "info@nyatimotionpictures.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wakiso",
      "addressCountry": "Uganda",
      "postalCode": "74733"
    },
    "sameAs": [
      "https://x.com/NyatiMPictures",
      "https://www.facebook.com/nyati.motionpictures",
      "https://www.youtube.com/@Nyatimotionpictures"
    ]
  };

  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 !overflow-x-hidden overflow-y-auto ">
      <SEO 
        title="Meet Our Team" 
        description="Meet the talented team behind Nyati Motion Pictures. Our Ugandan filmmakers, producers, and creative experts are dedicated to bringing East African stories to life."
        keywords="Nyati Motion Pictures team, Ugandan filmmakers, film production team Uganda, East African film industry, Kampala film production, creative experts Uganda, film producers Uganda, African storytelling team, Ugandan directors, Ugandan production team, East African filmmakers"
        url="https://www.nyatimotionpictures.com/team"
        structuredData={teamSchema}
      /> {/* Added SEO component here for SEO metadata */}

      <Navigation />
      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <OurTeam />
        <ContentSection />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Team;
