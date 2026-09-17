import React from 'react'
import MockUp from "../../1-Assets/MacBook Pro and iPhone 15 Pro Mockup.png";

const DWorkSection = () => {
  return (
    <div className="w-full h-full bg-[#221f26]">
      {/* container */}
      <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-evenly px-4 lg:px-12 py-16">
        {/* Image */}
        <div className="flex justify-center lg:justify-start mb-10 lg:mb-0">
          <img
            src={MockUp}
            alt="mockup"
            className="max-w-[60vw] lg:max-w-full p-4 lg:p-0"
          />
        </div>

        {/* text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* heading */}
          <h1 className="text-[#FFFFFE] font-bold text-3xl lg:text-5xl mb-5">
            How does it work?
          </h1>

          {/* paragraph */}
          <p className="max-w-[540px] text-[#FFFAF6] text-opacity-70 text-lg lg:text-xl font-[Inter-Regular] flex flex-col gap-5">
            <span>
              Whether you're watching a movie on the Nyati Streaming app or
              binging new episodes on your phone, you'll find a 'Donation'
              button. Simply select your preferred payment option, and voila!
            </span>
            <span>
              Your shillings go toward content the whole family can enjoy. After
              you donate, you can track the positive impact you've made on
              others.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DWorkSection