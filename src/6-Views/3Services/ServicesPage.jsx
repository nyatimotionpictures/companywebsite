import React from 'react'
import ServicesHeroSection from './ServicesHeroSection'
import Footer from '../../2-Components/Footer/Footer';
import Navigation from '../../2-Components/Navigation/Navigation';
import ServicesIntroSection from './ServicesIntroSection';
import ServicesOfferSection from './ServicesOfferSection';
import SChooseSection from './SChooseSection';
import SDiscoverSection from './SDiscoverSection';
import SPreProduction from './SPreProduction';
import SScriptSection from './SScriptSection';
import ContactFooter from '../../2-Components/Footer/ContactFooter';
import SEO from '../../2-Components/SEOHelmet/SEO';

const ServicesPage = () => {

  const servicesSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
    "url": "https://www.nyatimotionpictures.com/services",
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
      "https://www.facebook.com/profile.php?id=61561352262025&locale=be_BY",
      "https://www.youtube.com/@Nyatimotionpictures"
    ]
  };

  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">

      <SEO 
        title="Our Services" 
        description="Discover the range of services offered by Nyati Motion Pictures, a Ugandan film production company. We specialize in film production, TV shows, documentaries, post-production, and more across Uganda and East Africa."
        keywords="Nyati Motion Pictures services, Ugandan film production, TV show production Uganda, documentary production Uganda, East African filmmakers, post-production Uganda, video editing Uganda, film studio Kampala, production services Uganda, African storytelling, Ugandan filmmakers"
        url="https://www.nyatimotionpictures.com/services"
        structuredData={servicesSchema}
      /> {/* Added SEO component here for SEO metadata */}

      <Navigation />
      
      <div className="flex flex-col w-full h-full gap-0 space-0">
        <ServicesHeroSection />
        <ServicesIntroSection />
        <ServicesOfferSection />
        <SChooseSection />
        <SDiscoverSection />
        <SPreProduction />
        <SScriptSection />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage