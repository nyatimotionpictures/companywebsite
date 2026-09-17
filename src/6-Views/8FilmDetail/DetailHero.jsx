import { Box, Stack } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from '../../2-Components/Buttons/Buttons';
import styled from 'styled-components';
import { Icon } from "@iconify/react";

const DetailHero = ({ filmData }) => {
    const [backDropUrl, setBackdropUrl] = React.useState(null);
    const [youtubeLink, setYoutubeLink] = React.useState(null);
    const [localLink, setLocalLink] = React.useState(null)

    let routeNavigate = useNavigate()

    React.useEffect(() => {
        if (
            filmData?.filmType.toLowerCase().includes("series") ||
            (filmData?.filmType.toLowerCase().includes("segment") &&
                filmData?.seasons?.length > 0)
        ) {


            // if (
            //     filmData?.seasons[0]?.episodes?.length > 0 &&
            //     filmData?.seasons[0]?.episodes[0].episodeId.backdrops.length > 0
            // ) {
            //     let bklink = filmData?.seasons[0]?.episodes[0].episodeId.backdrops[0];

            //     setBackdropUrl(() => bklink);
            // } else if (filmData?.backdrops?.length > 0) {
            //     setBackdropUrl(() => filmData?.backdrops[0]);
            // }

            if (filmData?.backdrops?.length > 0) {
                setBackdropUrl(() => filmData?.backdrops[0]);
            }

        } else {
            if (
                filmData?.filmType.toLowerCase().includes("film") ||
                (filmData?.filmType.toLowerCase().includes("movie") &&
                    filmData?.backdrops?.length > 0)
            ) {
                setBackdropUrl(() => filmData?.backdrops[0]);
            }
        }
    }, [filmData, filmData?.title]);

    React.useEffect(() => {
        if (filmData?.youtubeTrailer) {
            
            setLocalLink(() => filmData?.youtubeTrailer);
               
            
        }
    }, [filmData, filmData?.title])
  return (
      <HeroContent
          className={`flex flex-col min-h-[70vh] h-full md:min-h-[80vh] w-screen bg-cover bg-no-repeat bg-fixed relative !overflow-hidden`}
      >
          <img
              src={backDropUrl ? backDropUrl : ""}
              alt=""
              className="flex absolute top-0 object-cover h-full w-full select-none bg-gradient-to-b from-transparent to-secondary-700"
              style={{
                  filter: "brightness(20%)", // Adjust brightness if needed
              }}
          />
          <div className="flex absolute top-0 object-cover h-full w-full select-none  bg-gradient-to-b from-transparent to-secondary-800" />
          <Box className="mx-auto h-full  absolute   px-5 sm:px-16 xl:py-3 block items-center">
              <Box className="flex flex-col relative  h-full w-screen ">
                  <Box className="w-max absolute bottom-10 flex">
                      <Stack
                          spacing={"24px"}
                          className="flex flex-col  mx-auto max-w-[300px] text-left md:max-w-[500px]  lg:w-[500px] overflow-hidden"
                      >
                          <Typography className="font-[Inter-Bold] text-[24px] md:text-5xl text-whites-40 select-none">
                              {filmData?.title}
                          </Typography>
                          <Typography className="font-[Inter-Regular] text-[#EEF1F4] text-[14px] sm:text-base text-ellipsis select-none">
                              {filmData?.plotSummary}
                          </Typography>

                          {filmData?.filmType.toLowerCase().includes("series") ||
                              filmData?.filmType.toLowerCase().includes("segment") ? (
                              <div>
                                  {filmData?.seasons?.length > 0 && (
                                      <Typography className="font-[Inter-Regular] text-[#EEF1F4] text-base text-ellipsis select-none">
                                          {filmData?.seasons[0].seasonTitle}
                                      </Typography>
                                  )}
                              </div>
                          ) : null}

                          <Stack
                              direction="row"
                              className="flex flex-row items-start space-x-8 select-none"
                          >
                              <Typography className="font-[Inter-Regular] text-[#FFFAF6] text-base">
                                  {filmData?.YearOfProduction}
                              </Typography>
                              <ul className="font-[Inter-Regular] text-[#FFFAF6] flex list-disc w-full space-x-8 text-base flex-wrap gap-y-3 items-start justify-start">
                                  <li className="w-max">{filmData?.filmType} </li>

                                  {filmData?.genre?.length > 0 && (
                                      <>
                                          {filmData?.genre?.map((data, index) => (
                                              <li key={index} className="w-max">
                                                  {data}
                                              </li>
                                          ))}
                                      </>
                                  )}
                              </ul>
                          </Stack>

                          {/** trailer button */}
                          <Stack
                              direction={"column"}
                              spacing={"20px"}
                              className="select-none"
                          >

                              <Stack className="flex-row gap-4">
                                  
                                  {
                                      localLink && <Buttons
                                          onClick={() =>window.location.href=`${localLink}`
                                          }
                                          className="flex w-max px-8 py-2 items-center justify-center space-x-2 rounded-full relative bg-[#706e72]"
                                      >
                                          <Icon
                                              icon="solar:play-circle-linear"

                                              className="h-8 w-8 text-whites-40"
                                          />
                                          <Typography className="font-[Roboto-Regular] text-base">
                                               Trailer
                                          </Typography>
                                      </Buttons>
                                  }
                                     
                                 
                              </Stack>
                          </Stack>
                      </Stack>
                  </Box>
              </Box>
          </Box>
      </HeroContent>
  )
}

export default DetailHero

const HeroContent = styled.div``;