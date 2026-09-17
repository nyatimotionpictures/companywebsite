import { Image, Stack } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react'
import Buttons from '../Buttons/Buttons';
import { useNavigate } from "react-router-dom";

const EpisodeContent = ({
    seriesdata,
    episodedata,
    openModal,
    setSelectedTrailer,
    openLocalModal,
}) => {
    const [trailerLink, setTrailerLink] = React.useState(null);
    const [playActions, setPlayActions] = React.useState(false);
    let routeNavigate = useNavigate()

    let ref = React.useRef();

    React.useEffect(() => {
        const handler = (event) => {
            if (playActions && ref.current && !ref.current.contains(event.target)) {
                setPlayActions(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [playActions]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setPlayActions(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setPlayActions(false);
    };

    React.useEffect(() => {
      //console.log(episodedata?.youtubeTrailer)
        if (episodedata?.youtubeTrailer !== " ") {
            setTrailerLink(() => episodedata?.youtubeTrailer);
        } else {
            setTrailerLink(null);
        }
    }, [episodedata]);

    // console.log(trailerLink);
    const playTrailer = () => {
        if (trailerLink !== null) {
            window.location.href = trailerLink
        }
    };

  
    return (
        <Stack
            spacing={"25px"}
            className="flex-col md:flex-row w-[280px] sm:w-full h-max justify-start items-start"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-start  items-start w-max h-max ">
                <Image
                    src={
                        episodedata?.posters?.length > 0
                            ? episodedata?.posters[0]
                            : ""
                    }
                    alt=""
                    className="size-fit sm:size-fill w-[280px] h-[250px] sm:w-[338px] sm:max-w-[338px] max-h-[250px] !object-cover mx-0 my-0 rounded-lg md:!w-[338px] xl:object-top xl:size-fit"
                />
            </div>

            <Stack spacing={"30px"} className="sm:w-[300px] md:w-full">
                <Stack>
                    <Typography className="font-[Inter-SemiBold] text-base md:text-xl text-whites-40">
                        {`S${seriesdata?.seasonCounter}`}{" "}
                        {episodedata && `E${episodedata?.episodeCounter}`} -{" "}
                        {episodedata?.episodeTitle}
                    </Typography>
                    <Typography className="font-[Inter-Regular] text-[14px] md:text-base text-[#FFFAF6] text-opacity-70">
                        {episodedata?.released}
                    </Typography>
                    <Typography className="font-[Inter-Regular] text-[13px] md:text-base text-[#FFFAF6] text-opacity-70 text-justify">
                        {episodedata?.plotSummary}
                    </Typography>
                </Stack>
                <Stack spacing={"24px"}>
                    <Stack spacing={"20px"} className="flex flex-row">
                        {trailerLink !== null  ? (
                            <Buttons
                                onClick={() => playTrailer()}
                                className="flex w-max px-8 py-2 items-center justify-center space-x-2 rounded-full relative bg-[#706e72]"
                            >
                                <span className="icon-[solar--play-circle-linear] w-6 h-6"></span>
                                <Typography className="font-[Roboto-Regular] text-base">
                                    Trailer
                                </Typography>
                            </Buttons>
                        ) : null}


                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default EpisodeContent