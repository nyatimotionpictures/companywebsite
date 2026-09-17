import React from 'react'
import Metadata from "../../1-Assets/data/web_metadata.json";
import styled from 'styled-components';
import Buttons from '../../2-Components/Buttons/Buttons';
const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const HeroBg = result.content[1].files[3];
const Logo2 = result.content[2].files[0];


const CRightSection = () => {
  
  return (
      <Container className=" box-border flex flex-col w-full min-h-[70vh] h-full flex-grow xl:min-h-full lg:h-screen lg:items-center lg:justify-center relative overflow-hidden lg:px-[78px] " >
          {/** navigation */}
          <nav className="w-full h-[85px] absolute z-[10] top-0 flex items-center justify-end px-2 lg:px-12 xl:px-12 overflow-visible">
              <div className="hidden lg:flex flex-row items-center gap-[35px]">
                  <h1 className="font-[Inter-Medium] text-lg text-[#FFFAF6]">Internet Archive</h1>
              </div>
          </nav>
          <div className="flex flex-col gap-[15px] max-w-[500px] ">
              <h1 className="font-bold font-[Inter-Bold] text-[30px] sm:text-4xl md:text-[38px] xl:text-5xl 2xl:text-6xl md:leading-tight text-[#F2F2F2] text-left">
                  Where Epic  {" "}
                  <span className="block">Stories Transcend Entertainment</span>
              </h1>
          </div>
      </Container>
  )
}

export default CRightSection

const Container = styled.div`
  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) top/cover no-repeat;
`;