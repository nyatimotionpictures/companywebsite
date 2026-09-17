import React from 'react'
import Footer from '../../2-Components/Footer/Footer'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import SEO from '../../2-Components/SEOHelmet/SEO';

const MainArchivePage = () => {
    const archiveSchema = {
    "@context": "http://schema.org",
    "@type": "CollectionPage",
    "name": "Internet Archive",
    "headline": "Where Epic Stories Transcend Entertainment",
    "description": "Explore the historical archives of Nyati Motion Pictures, featuring premiere photos, festival appearances, articles, and news dating back to 2006.",
    "url": "https://www.nyatimotionpictures.com/internetarchive",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Nyati Motion Pictures",
      "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
      "sameAs": [
        "https://x.com/NyatiMPictures",
        "https://www.facebook.com/nyati.motionpictures",
        "https://www.youtube.com/@Nyatimotionpictures"
      ]
    }
  };

    return (
        <div className="box-border w-full h-full flex flex-col gap-0 flex-grow overflow-hidden">
        <SEO 
        title="Internet Archive" 
        description="Where Epic Stories Transcend Entertainment. Explore the Nyati Motion Pictures Internet Archive featuring collections of premiere photos, festival highlights, articles, and news dating back to 2006."
        keywords="Nyati Motion Pictures archive, Ugandan film history, East African cinema archives, film premiere photos, Ugandan film festivals, Nyati films news 2006"
        url="https://www.nyatimotionpictures.com/internetarchive"
        structuredData={archiveSchema}
        />
            <div className="box-border w-full h-full flex flex-col md:flex-col xl:flex-row gap-0 flex-grow overflow-hidden">
                {/** first section */}
                <div className="w-full xl:w-[60%] bg-[#18161C]">
                   <LeftSection />
                </div>
                {/** second section */}
                <div className="w-full xl:w-[40%]">
                    <RightSection />
                </div>
            </div>

            <Footer />
        </div>
       
    )
}

export default MainArchivePage