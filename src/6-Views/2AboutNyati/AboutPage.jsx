import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from "../../2-Components/Footer/Footer";
import AHeroSection from "./AHeroSection";
import AFounderSection from "./AFounderSection";
import AVisionSection from "./AVisionSection";
import AImpactSection from "./AImpactSection";
import ADonationSection from "./ADonationSection";
import AShowSection from "./AShowSection";
import SEO from '../../2-Components/SEOHelmet/SEO';

const AboutPage = () => {
  let nextRef = React.useRef(null);


  const localBusinessSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
    "url": "https://www.nyatimotionpictures.com/about",
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

  const handleScrollTo = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 !overflow-x-hidden overflow-y-auto ">
      <SEO 
        title="About Us" 
        description="Learn more about Nyati Motion Pictures, a leading film production company based in Uganda. We bring stories to life through innovative filmmaking."
        url="https://www.nyatimotionpictures.com/about"
        structuredData={localBusinessSchema}
      /> {/* Added SEO component here for SEO metadata */}

      <Navigation />

      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <AHeroSection scrollFunc={handleScrollTo} />
        <AFounderSection nRef={nextRef}/>
        <AVisionSection />
        <AImpactSection />
        <ADonationSection />
        <AShowSection />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
