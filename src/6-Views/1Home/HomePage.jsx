import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import HHero from "./HHero";
import HDiscoverSection from "./HDiscoverSection";
import HMovieSliderSection from "./HMovieSliderSection";
import HContentSection from "./HContentSection";
import FooterWatch from "../../2-Components/Footer/FooterWatch";
import ContactFooter from "../../2-Components/Footer/ContactFooter";
import Footer from "../../2-Components/Footer/Footer";
import HUpcomingEvents from "./HUpcomingEvents";
import SEO from '../../2-Components/SEOHelmet/SEO';

const HomePage = () => {
  let nextRef = React.useRef(null);

  const handleScrollTo = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
    }
  };
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.nyatimotionpictures.com/#website",
        "url": "https://www.nyatimotionpictures.com/",
        "name": "Nyati Motion Pictures",
        "description": "Premier Ugandan film and motion picture production company.",
        "publisher": {
          "@id": "https://www.nyatimotionpictures.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.nyatimotionpictures.com/#organization",
        "name": "Nyati Motion Pictures",
        "url": "https://www.nyatimotionpictures.com/",
        "logo": "https://www.nyatimotionpictures.com/logo.png",
        "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
        "description": "Nyati Motion Pictures (NMP) is a premier Ugandan film and video production house crafting captivating motion pictures, documentaries, and commercial content.",
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
      }
    ]
  };

  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 !overflow-x-hidden overflow-y-auto ">

     <SEO 
        title="Nyati Motion Pictures" 
        description="Explore the captivating films, documentaries, and commercial video production services by Nyati Motion Pictures in Uganda and East Africa."
        url="https://www.nyatimotionpictures.com/"
        structuredData={homeSchema}
      />

     <Navigation />

      {/** page sections */}
      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <HHero scrollFunc={handleScrollTo} />

        <HDiscoverSection nRef={nextRef} />
        <HMovieSliderSection />
        <HContentSection />
        <FooterWatch />
        <HUpcomingEvents />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
