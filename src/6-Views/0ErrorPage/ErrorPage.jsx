
import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from '../../2-Components/Footer/Footer'

const ErrorPage = () => {
    //const error = useRouteError();

  return (
      <div className='relative px-0 w-full h-full bg-secondary-800 overflow-x-hidden select-none'>
          <Navigation />
          <div className="flex flex-col w-full h-full gap-0 space-0">
              <div className="min-h-[60vh] h-full lg:min-h-screen flex flex-col bg-[#141118] items-center justify-center px-[30px] py-16 sm:px-16 md:py-16 lg:py-16 w-screen overflow-hidden relative">
               <div className="w-full h-full flex flex-col lg:flex-col mt-16 lg:mt-[60px] justify-between items-center md:px-[5%] md:mt-[60px] py-0 gap-4">
                 <h1 className="text-xl text-center md:text-4xl lg:text-5xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">Oops!</h1>
                   <h1 className="text-xl text-center md:text-4xl lg:text-5xl text-primary-500 font-bold capitalize font-[Inter-Bold]">404 PAGE!</h1>
          <p className="  text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Sorry , an unexpected error has occurred. </p>
          <p className="  text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">
           Page Not Found or Page must have been Moved
          </p>
               </div>
              </div>
          </div>
         <Footer />
      </div>
  )
}

export default ErrorPage

