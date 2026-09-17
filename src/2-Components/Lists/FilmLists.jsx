import React from 'react'
import MovieCarousel from '../Carousels/MovieCarousel';
import { Stack } from '@chakra-ui/react';

const FilmLists = ({ title, displayData, pl, cardtype }) => {
    return (
        <Stack spacing={"20px"} className={`${pl ? pl : "pl-0"} flex-col w-screen !overflow-hidden`}>
            {title && (
                <h1 className="text-[#FFFAF6] font-[Inter-SemiBold] opacity-[70%] py-2 text-base md:text-[22px] text-left">
                    {title}
                </h1>
            )}

            <div className="flex w-full  gap-0 items-center  mx-auto overflow-hidden">
                <MovieCarousel displayData={displayData} cardtype={cardtype} />
            </div>
        </Stack>
    );
};

export default FilmLists