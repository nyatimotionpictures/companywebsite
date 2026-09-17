import React from 'react'
import Metadata from "../../1-Assets/data/web_metadata.json"; 
import styled from 'styled-components';
import Buttons from '../../2-Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const HeroBg = result.content[1].files[3];
const Logo = result.content[2].files[1];

const LeftSection = () => {
    let navigate = useNavigate()
  return (
      <Container className=" box-border flex flex-col w-full min-h-[70vh] h-full flex-grow xl:min-h-full items-center justify-center xl:h-screen lg:items-center lg:justify-center relative overflow-hidden">
          {/** navigation */}
          <nav className="w-full h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12 xl:px-12 overflow-visible">
              
              <div className="flex lg:flex flex-row items-center gap-[35px]">
                  <Buttons
                      onClick={() => navigate("/")}
                      variant="ghost"
                      size="icon"
                      className="w-max h-max p-0 hover:bg-secondary-50 hover:bg-opacity-30"
                  >
                      <img
                          src={Logo}
                          className="w-[55.74px] h-[56.02px] md:w-[55.74px] lg:w-[55.74px] lg:h-[56.02px] xl:w-[65.74px] xl:h-[66.02px] navbar-brand cursor-pointer"
                          alt="logo"
                      />
                  </Buttons>

                  <h1 className="hidden lg:flex font-[Inter-Medium] text-lg text-[#FFFAF6]">Internet Archive</h1>
              </div>

              <Buttons onClick={() => navigate("/internetarchive/collections")} className="select-none bg-primary-500 rounded-full px-5 font-[Roboto-Medium] text-[10px] md:text-sm ">
              <p>More Collections</p>
              </Buttons>
          </nav>
          <div className="flex flex-col gap-[15px] max-w-[500px]">
              <h1 className="font-bold font-[Inter-Bold] text-[30px] sm:text-4xl md:text-[38px] xl:text-5xl 2xl:text-6xl md:leading-tight text-[#F2F2F2] text-center xl:text-left">
                  Where Epic  {" "}
                  <span className="lg:block">Stories Transcend Entertainment</span>
              </h1>
          </div>
      </Container>
  )
}

export default LeftSection

const Container = styled.div`
  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) top/cover no-repeat;
`;