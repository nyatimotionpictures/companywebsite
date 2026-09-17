import React from 'react'
import Navigation from '../../2-Components/Navigation/Navigation'
import Footer from '../../2-Components/Footer/Footer'
import SEO from '../../2-Components/SEOHelmet/SEO'
//import nyatiflixImg from "../../1-Assets/Nyatiflix_Soon.png"

const nyatiflixImg ="https://ik.imagekit.io/nyatimot/Pages/ComingSoon/Nyatiflix_Soon.png?updatedAt=1729770652793"

const ExpectedFeatures = [
    {
        title: "Affordable Access",
        text: 'Enjoy high-quality entertainment without breaking the bank. Nyatiflix is designed to be budget-friendly for everyone'
    },
    {
        title: "User-Friendly Experience",
        text: 'Seamlessly browse, discover, and enjoy your favorite content with our easy-to-navigate interface.'
    },
    {
        title: "Diverse Content",
        text: 'From our classic favorites to the latest releases, enjoy a wide range of genres that showcase Africa’s incredible talent and creativity.'
    },
    {
        title: "Exclusive Originals",
        text: 'Be the first to watch our unique series and films that you won’t find anywhere else.'
    }
] 

const NyatiFlixSoon = () => {
  return (
      <div className='relative px-0 w-full h-full bg-secondary-800 overflow-x-hidden select-none'>
          <SEO 
            title="NyatiFlix Streaming | Coming Soon"
            description="Nyatiflix is an upcoming on-demand African streaming platform by Nyati Motion Pictures offering original movies, documentaries, and series."
            keywords="NyatiFlix, African streaming platform, watch Ugandan films, Nyati Motion Pictures streaming"
            url="https://www.nyatimotionpictures.com/comingsoon"
            image={nyatiflixImg}
          />
          <Navigation />

          <div className="flex flex-col w-full h-full gap-0 space-0">
              <div className="min-h-[60vh] h-full lg:min-h-screen flex flex-col bg-[#141118] items-center justify-center px-[30px] py-16 sm:px-16 md:py-16 lg:py-16 w-screen overflow-hidden relative">
              
                  {/** container */}
                  <div className="w-full h-full flex flex-col lg:flex-col mt-16 lg:mt-[60px] justify-between items-center md:px-[5%] md:mt-[60px] py-0">
                      {/** title */}
                      <h1 className="text-xl text-center md:text-4xl lg:text-5xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">Nyatiflix is Here!</h1>

                      <div className="w-full h-full flex flex-col lg:flex-row mt-[35px] lg:mt-[67px] justify-between items-center lg:gap-[80px] xl:gap-[121px] lg:justify-center md:px-[5%] md:mt-[45px] py-0">
                          {/* image */}
                          <div className="w-full lg:w-auto flex justify-center ">
                              <img
                                  src={nyatiflixImg}
                                  alt="icon"
                                  className=" h-full max-h-[600px] w-full size-full max-w-[278.0px]  lg:max-h-auto lg:max-w-[278.0px]"
                              />
                          </div>
                      
                          {/** content */}
                          <div className="w-full md:max-w-[700px] lg:max-w-[395px]  flex flex-col items-center lg:items-start justify-center gap-3 md:gap-5 lg:gap-5  lg:text-left text-center">
                              <h1 className="font-[Inter-Semibold] text-[#ffffff] text-xl sm:text-2xl">What to Expect:</h1>
                              
                              {
                                  ExpectedFeatures.map((data, index) => (
                                      <div key={index} className="flex flex-col gap-3">
                                          <h1 className="font-[Inter-Semibold]  text-[#ffffff] text-base sm:text-lg">{data.title}</h1>
                                          <p className="font-[Inter-Regular] text-[#ffffff] text-opacity-70 text-sm sm:text-base">{data.text}</p>
                                      </div>
                                  ))
                              }
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  )
}

export default NyatiFlixSoon