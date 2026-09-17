import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from "../../2-Components/Footer/Footer";
import DHelpSection from "./DHelpSection";
import DWorkSection from "./DWorkSection";
import DProjectSection from "./DProjectSection";
//import DonatePrices from "../../2-Components/Modals/DonatePrices";
import DonateModal from "../../2-Components/Modals/DonateModal";
import SEO from '../../2-Components/SEOHelmet/SEO';

const DonatePage = () => {
  const [openAmountModal, setOpenAmountModal] = React.useState(false);

  React.useEffect(() => {
    if (openAmountModal) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }
    } else {
      document.body.style.overflow = "unset";
    }

  },[openAmountModal])

  const handleAmountOpen = () => {
    setOpenAmountModal(() => true);
     if (typeof window != "undefined" && window.document) {
       document.body.style.overflow = "hidden";
     }
  }
  const handleAmountClose = () => {
    setOpenAmountModal(() => false);
     document.body.style.overflow = "unset";
  };

  const donateSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "url": "https://www.nyatimotionpictures.com/donate",
    "logo": "https://www.nyatimotionpictures.com/logo.png",
    "sameAs": [
      "https://x.com/NyatiMPictures",
      "https://www.facebook.com/nyati.motionpictures",
      "https://www.youtube.com/@Nyatimotionpictures"
    ],
    "potentialAction": {
      "@type": "DonateAction",
      "target": "https://www.nyatimotionpictures.com/donate",
      "recipient": {
        "@type": "LocalBusiness",
        "name": "Nyati Motion Pictures"
      }
    }
  };

  return (
    <>
      <div className="relative  px-0 w-full h-full bg-secondary-800 overflow-x-hidden  ">
         <SEO 
        title="Support Us" 
        description="Support Nyati Motion Pictures' mission to bring Ugandan and East African stories to life. Your donation helps us continue creating impactful films, documentaries, and TV shows."
        keywords="donate to Nyati Motion Pictures, support Ugandan filmmakers, Ugandan film production, East African film funding, film production donations Uganda, support African storytelling, filmmaking donations East Africa, donate to filmmakers Uganda, support Nyati Motion Pictures, film industry donations Uganda"
        url="https://www.nyatimotionpictures.com/donate"
        structuredData={donateSchema}
       />  {/* Added SEOHelmetDonate component here for SEO metadata */}
        <Navigation />

        <div className="flex flex-col w-full h-full gap-0 space-0">
          <DHelpSection handleAmountOpen={handleAmountOpen} />
          <DWorkSection />
          <DProjectSection handleAmountOpen={handleAmountOpen} />
        </div>
        <Footer />

        {/** popup content */}
      </div>

      {openAmountModal && (
        
          <DonateModal visible={openAmountModal} onClose={handleAmountClose} />
     
      )}
    </>
  );
};

export default DonatePage;
