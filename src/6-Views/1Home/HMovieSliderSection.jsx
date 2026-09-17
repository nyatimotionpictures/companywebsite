import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImages from "../../1-Assets/data/HMovieSliderSection_metadata.json";
import Buttons from "../../2-Components/Buttons/Buttons";
import FeaturedCard from "../../2-Components/Cards/FeaturedCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HMovieSliderSection = () => {
  const settings = {
    dots: false,

    speed: 500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" min-h-[70vh] w-screen items-center justify-center flex flex-col bg-secondary-800 px-[30px] py-[54px] sm:px-16 sm:py-16 overflow-x-hidden">
      <div className="w-full flex flex-col justify-between  md:max-w-[743px] lg:max-w-[1000px] gap-[20px]">
        {/* Movie Slider heading */}
        <h1 className="text-[#F2F2F2] text-[26px]">Featured Movies</h1>

        {/* Slider */}
        <div className="w-full h-max">
          <Slider
            {...settings}
            className="flex flex-row gap-5 h-full w-full lg:max-w-[980px]"
          >
            {CardImages.map((data, index) => {
              return <FeaturedCard key={index} data={data} />;
            })}
          </Slider>
        </div>

        {/** 
                   * 
                   *    <SliderContainer className="slideContain flex flex-row w-full overflow-hidden relative">
          <Carousel
            transitionTime={3000}
            interval={5000}
            emulateTouch
            autoPlay
            infiniteLoop
            swipeable
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            className="gap-x-20"
          >
            {movies.map((data, index) => {
              return (
                <div className="block max-w-max w-[400px] ">
                  <FeaturedCard key={index} data={data} />{" "}
                </div>
              );
            })}
          </Carousel>
        </SliderContainer>
                   * 
                   */}

        {/* button */}
        <NavLink to="/film">
          <Buttons className="bg-[#1A171E] rounded-lg w-full md:max-w-[347px] h-[64px] flex items-center justify-center text-[#EE5070] text-[13.96px] md:text-[16px] uppercase italic font-bold mx-auto lg:mx-0 hover:text-primary-500">
            VIEW ALL OUR WORK
          </Buttons>
        </NavLink>
      </div>
    </div>
  );
};

export default HMovieSliderSection;

const SliderContainer = styled.div`
  &.thumbs-wrapper {
    display: none !important;
  }

  & .carousel-status {
    display: none;
  }

  & .carousel-root {
    width: 100%;
    padding: 0 !important;
    margin: 0 !important;
    gap: 0 !important;
  }
`;
