import React from 'react'
import Footer from '../../2-Components/Footer/Footer';
import FooterWatch from '../../2-Components/Footer/FooterWatch';
import ContactUsDetails from './ContactUsDetails';
import ContactUsHero from './ContactUsHero';
import Navigation from '../../2-Components/Navigation/Navigation';
import SEO from '../../2-Components/SEOHelmet/SEO';

const ContactUsPage = () => {
      let nextRef = React.useRef(null);
      const handleSrollTo = () => {
        if (nextRef.current) {
          nextRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nyati Motion Pictures",
    "url": "https://www.nyatimotionpictures.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Nyati Motion Pictures",
      "telephone": "+256 778 787 660",
      "email": "info@nyatimotionpictures.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wakiso",
        "addressCountry": "Uganda",
        "postalCode": "74733"
      }
    }
  };

  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">
      <SEO 
        title="Contact Us"
        description="Get in touch with Nyati Motion Pictures for film production inquiries, collaborations, sponsorships, and studio services in Uganda."
        keywords="contact Nyati Motion Pictures, Uganda film studio contact, Kampala video production, Ugandan filmmakers contact"
        url="https://www.nyatimotionpictures.com/contact"
        structuredData={contactSchema}
      />
      <Navigation />

      <div className="flex flex-col w-full h-full gap-0 space-0">
        <ContactUsHero scrollfunc={handleSrollTo} />
        <ContactUsDetails dref={nextRef} />
        <FooterWatch />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage