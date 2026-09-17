import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import FHeroSection from "./FHeroSection";
import FooterWatch from "../../2-Components/Footer/FooterWatch";
import Footer from "../../2-Components/Footer/Footer";
import FilmsWatchList from "./FilmsWatchList";
import watchJSON from "../../1-Assets/data/watchlist_metadata.json";
import FilmsGenre from "./FilmsGenre";
import FDiscoverSection from "./FDiscoverSection";
import SEO from '../../2-Components/SEOHelmet/SEO';


const FilmPage = () => {
  const filmSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
    "url": "https://www.nyatimotionpictures.com/film",
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
    <div className="relative px-0 w-full min-h-[100vh] h-full bg-secondary-800 !overflow-x-hidden overflow-y-auto">
      <SEO 
        title="Featured Films and Documentaries" 
        description="Explore the captivating films and documentaries by Nyati Motion Pictures, showcasing the rich storytelling heritage of Uganda and East African."
        keywords="Nyati Motion Pictures films, Ugandan films, East African documentaries, feature films Uganda, film production Uganda, storytelling films East Africa, Ugandan filmmakers, African documentaries, watch Ugandan films, East African cinema"
        url="https://www.nyatimotionpictures.com/film"
        structuredData={filmSchema}
      /> {/* Added SEO component here for SEO metadata */}

      <Navigation />

      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <FHeroSection />

        <FDiscoverSection />

        <FilmsWatchList />

        {watchJSON.length > 0 && (
          <>
            {watchJSON.map((data, index) => {
              return (
                <FilmsGenre
                  key={index}
                  title={data?.name}
                  watchData={data.watchlists}
                />
              );
            })}
          </>
        )}
        
    

        <FooterWatch />
      </div>
      <Footer />
    </div>
  );
};

export default FilmPage;
