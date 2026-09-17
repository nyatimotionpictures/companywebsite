import React, { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { Icon } from "@iconify/react";
import Metadata from '../../1-Assets/data/web_metadata.json';

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const Logo = result.content[2].files[1];

const Navigation = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [aboutDropdown, setAboutDropdown] = useState(false);

  const toggleDropdown = () => {
    setAboutDropdown(prev => !prev);
  };

  const closeDropdown = () => {
    setAboutDropdown(false);
  };

  const MenuItemData = [
    { title: "Home", path: "/" },
    { 
      title: "About Us", 
      path: "#", 
      isDropdown: true,
      dropdownItems: [
        { title: "About Company", path: "/about" },
        { title: "Our Services", path: "/services" }
      ],
    },
    { title: "Nyati Films", path: "/film" },
    { title: "Team", path: "/team" },
    { title: "Contact Us", path: "/contact" }
  ];
  const TableMenuItemData = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      path: "#",
      isDropdown: true,
      dropdownItems: [
        { title: "About Company", path: "/about" },
        { title: "Our Services", path: "/services" }
      ],
    },
    { title: "Nyati Films", path: "/film" },
    

  ];
  const MobileMenuItemData = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      path: "#",
      isDropdown: true,
      dropdownItems: [
        { title: "About Company", path: "/about" },
        { title: "Our Services", path: "/services" }
      ],
    },
    { title: "Nyati Films", path: "/film" },
   
  ];

  return (
    <nav className="w-screen h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12 xl:px-16 overflow-visible">
      <div className="hidden lg:flex">
        <Buttons
          onClick={() => navigate("/")}
          variant="ghost"
          size="icon"
          className="w-max h-max p-0 hover:bg-secondary-50 hover:bg-opacity-30"
        >
          <img
            src={Logo}
            className="lg:w-[55.74px] lg:h-[56.02px] xl:w-[65.74px] xl:h-[66.02px] navbar-brand cursor-pointer"
            alt="logo"
          />
        </Buttons>
      </div>

      {/** large screens */}
      <div className="h-full hidden lg:flex">
        <ul className="flex justify-center items-center space-x-10 text-base  text-[#FFFAF6] h-full font-[Inter-Medium]">
          {MenuItemData.map((data, index) => (
            <li 
              key={index} 
              className="relative"
              onMouseLeave={closeDropdown}
            >
              
              
              <NavLink
                role="button"
                to={data.isDropdown ? "#" : data.path}
                end={data.path === "/" ? true : false}
                aria-current="page"
                className={({ isActive }) =>
                  isActive && !data.path.includes("#") || isActive && location.pathname.includes("about") || isActive && location.pathname.includes("services")
                    ? "flex items-center justify-center border-b-[#EE5170] border-b-2 cursor-pointer py-4 px-3"
                    : "flex items-center justify-center border-b-2 border-b-transparent cursor-pointer py-4 px-3 hover:border-b-[#EE5170]"
                }
                onClick={data.isDropdown ? toggleDropdown : closeDropdown}
              >
                {data.title}
                {data.isDropdown && (
                  <Icon 
                    icon="bx:chevron-down"
                    className=" w-6 h-6"
                  />
                )}
              </NavLink>

              {data.isDropdown && aboutDropdown && (
                <ul className="absolute top-full left-0  w-[200px] bg-secondary-700 text-white shadow-lg rounded-md z-50 flex flex-col gap-[5px] px-[10px] py-[10px]">
                  {data.dropdownItems.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center  hover:bg-secondary-500"> {/* Increased padding */}
                      <NavLink 
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-4 text-[#EE5170]"
                            : "block px-4 py-4"
                        }
                        onClick={closeDropdown}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/** tablets */}
      <div className="h-full w-full hidden  lg:hidden md:flex overflow-visible items-center">
        <ul className="w-full flex justify-around items-center text-xs md:text-base text-[#FFFAF6] font-[Inter-Medium] h-full">
          {TableMenuItemData.map((data, index) => (
            <li key={index} className="relative">
              <NavLink
                to={data.path}
                end={data.path === "/" ? true : false}
                className={({ isActive }) =>
                  isActive && !data.path.includes("#") || isActive && location.pathname.includes("about") || isActive && location.pathname.includes("services")
                    ? "flex items-center border-b-[#EE5170] border-b-2 cursor-pointer py-2 xs:py-4 xs:px-3 text-[#EE5170]  bg-opacity-40"
                    : "flex items-center border-b-2 border-b-transparent cursor-pointer py-2 xs:py-4 xs:px-3 hover:border-b-[#EE5170]"
                }
                onClick={data.isDropdown ? toggleDropdown : closeDropdown}
              >
                {data.title}
                {data.isDropdown && (
                  <Icon
                    icon="bx:chevron-down"
                    className="w-4 h-4 xs:w-6 xs:h-6"
                  />
                )}
              </NavLink>

              {data.isDropdown && aboutDropdown && (
                <ul className="absolute top-full left-0 mt-0 w-[150px] bg-secondary-700 text-white shadow-lg rounded-md z-50 flex flex-col gap-[5px] px-[10px] py-[10px]">
                  {data.dropdownItems.map((item, idx) => (
                    <li key={idx} className=" flex items-center justify-center  hover:bg-secondary-500"> {/* Increased padding */}
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-3 text-[#EE5170]"
                            : "block px-4 py-3"
                        }
                        onClick={closeDropdown}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/** Donation */}
        <div className="flex lg:hidden">
          <Buttons
            variant="default"
            className="px-2 text-xs rounded-full md:text-sm h-max w-max font-medium font-[Roboto-Medium] text-[#FFFAF6] cursor-pointer"
            onClick={() => navigate("/donate")}
          >
            Donate to Nyati
          </Buttons>
        </div>
      </div>
      {/** mobile screens */}
      <div className="h-full w-full md:hidden flex overflow-visible items-center">
        <ul className="w-full flex justify-around items-center text-xs md:text-base text-[#FFFAF6] font-[Inter-Medium] h-full">
          {MobileMenuItemData.map((data, index) => (
            <li key={index} className="relative">
              <NavLink
                to={data.path}
                end={data.path === "/" ? true : false}
                className={({ isActive }) =>
                  isActive && !data.path.includes("#") || isActive && location.pathname.includes("about") || isActive && location.pathname.includes("services")
                    ? "flex items-center border-b-[#EE5170] border-b-2 cursor-pointer py-2 xs:py-4 xs:px-3 text-[#EE5170]  bg-opacity-40"
                    : "flex items-center border-b-2 border-b-transparent cursor-pointer py-2 xs:py-4 xs:px-3 hover:border-b-[#EE5170]"
                }
                onClick={data.isDropdown ? toggleDropdown : closeDropdown}
              >
                {data.title}
                {data.isDropdown && (
                  <Icon 
                    icon="bx:chevron-down"
                    className="w-4 h-4 xs:w-6 xs:h-6"
                  />
                )}
              </NavLink>

              {data.isDropdown && aboutDropdown && (
                <ul className="absolute top-full left-0 mt-0 w-[150px] bg-secondary-700 text-white shadow-lg rounded-md z-50 flex flex-col gap-[5px] px-[10px] py-[10px]">
                  {data.dropdownItems.map((item, idx) => (
                    <li key={idx} className=" flex items-center justify-center  hover:bg-secondary-500"> {/* Increased padding */}
                      <NavLink 
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-3 text-[#EE5170]"
                            : "block px-4 py-3"
                        }
                        onClick={closeDropdown}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/** Donation */}
        <div className="flex lg:hidden">
          <Buttons
            variant="default"
            className="px-2 text-xs rounded-full md:text-base h-max w-max font-medium font-[Roboto-Medium] text-[#FFFAF6] cursor-pointer"
            onClick={() => navigate("/donate")}
          >
            Donate to Nyati
          </Buttons>
        </div>
      </div>

      {/** Donation */}
      <div className="hidden lg:flex">
        <Buttons
          variant="default"
          className="px-5 xl:px-0 xl:w-[190.34px] xl:h-[41.38px] rounded-[49.66px] font-medium font-[Roboto-Medium] lg:text-[12.96px] xl:text-[15.96px] text-[#FFFAF6] cursor-pointer"
          onClick={() => navigate("/donate")}
        >
          Donate to Nyati
        </Buttons>
      </div>
    </nav>
  );
};

export default Navigation;