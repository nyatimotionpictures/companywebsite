import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import Metadata from '../../1-Assets/data/web_metadata.json';

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const Logo = result.content[2].files[1];

const Navigation = () => {
  let navigate = useNavigate();
  return (
    <nav className="w-screen h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12  xl:px-16 !overflow-hidden">
      
      {/* Navigation Section: Logo and More Collections Button */}
      
      {/** Laptop - logo */}
      <div className="hidden lg:flex">
        <Buttons
          onClick={() => navigate("/")}
          variant="ghost"
          size="icon"
          className="w-max h-max p-0 hover:bg-secondary-50 hover:bg-opacity-30"
        >
          <img
            src={Logo}
            className="lg:w-[55.74px] lg:h-[56.02px] xl:w-[65.74px] xl:h-[66.02px]  navbar-brand cursor-pointer"
            alt="logo"
          />
        </Buttons>
      </div>

      {/** Action button - More Collections */}
      <div className="flex lg:flex">
        <Buttons
          variant="default"
          className="px-5 xl:px-0 xl:w-[190.34px] xl:h-[41.38px] rounded-[49.66px] font-medium font-[Roboto-Medium]  lg:text-[12.96px] xl:text-[15.96px]  text-[#FFFAF6] cursor-pointer"
          onClick={() => navigate("/Morecollections")}
        >
          More Collections
        </Buttons>
      </div>
    </nav>
  );
};

export default Navigation;
