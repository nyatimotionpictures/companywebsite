import React from "react";
import styled from "styled-components";

const ContactUsDetails = ({ dref }) => {
  return (
    <Container
      ref={dref}
      className="w-full bg-[#141118] px-[30px] box-border py-8 md:py-16 sm:px-12 lg:px-[86px] overflow-hidden"
    >
      <div className="max-w-[300px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1240px] xl:gap-24 items-start">
        <div spacing={"20px"} className="flex flex-col gap-[20px]">
          <h1 className="text-[#FFFAF6] opacity-[100%] text-[25px] md:text-[32px] lg:text-[32px] text-center capitalize font-[Inter-SemiBold]">
            For more information <span className="block"> contact us</span>{" "}
          </h1>

          <div className="flex flex-col gap-[20px] items-center text-center">
            <div className="flex flex-col text-[#F2F2F2] opacity-[80%] text-[17px]">
              <h5 className="text-[#F2F2F2] opacity-[80%] text-[18px] font-[Inter-Medium]">
                Call
              </h5>
              <p>+256 778 787 660</p>
              <p>+256 702 074337</p>
            </div>
            <div className="text-[#F2F2F2] opacity-[80%] text-[17px]">
              <h5 className="text-[#F2F2F2] opacity-[80%] text-[18px] font-[Inter-Medium]">
                Whatsapp
              </h5>
              <p>+256 791 896 110</p>
            </div>
            <div className="text-[#F2F2F2] opacity-[80%] text-[17px]">
              <p>P.o Box 74733, Kampala</p>
            </div>
            <div className="text-[#F2F2F2] opacity-[80%] text-[17px]">
              <h5 className="text-[#F2F2F2] opacity-[80%] text-[18px] font-[Inter-Medium]">
                E-mail:
              </h5>
              <p className="font-[Inter-Medium]">
                info@nyatimotionpictures.com
              </p>
              <p className="font-[Inter-Medium]">
                nyatimotionpictures@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUsDetails;

const Container = styled.section`
  min-height: 54vh;

  background-size: cover;
`;
