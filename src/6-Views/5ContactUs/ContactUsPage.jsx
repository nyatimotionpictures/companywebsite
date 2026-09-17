import React from 'react'
import Footer from '../../2-Components/Footer/Footer';
import FooterWatch from '../../2-Components/Footer/FooterWatch';
import ContactUsDetails from './ContactUsDetails';
import ContactUsHero from './ContactUsHero';
import Navigation from '../../2-Components/Navigation/Navigation';

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
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">
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