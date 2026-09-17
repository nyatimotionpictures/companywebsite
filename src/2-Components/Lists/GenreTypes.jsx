import { Stack } from "@chakra-ui/react";
import React from "react";
import FilmLists from "./FilmLists";


const GenreTypes = ({ genreData }) => {
   // console.log(genreData)
    return (
        <Stack
            direction="column"
            spacing="0px"
            className="flex w-full  gap-0 items-start justify-center m-0"
        >
            <FilmLists
                title={genreData.title}
                cardtype="genre"
                displayData={genreData.Lists}
            />
        </Stack>
    );
};

export default GenreTypes;
