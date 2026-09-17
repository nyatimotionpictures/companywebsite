import { Box, Stack } from "@chakra-ui/react";
import React from "react";

import styled from 'styled-components';
import GenreTypes from "../../2-Components/Lists/GenreTypes";


const FilmsGenre = ({ title, watchData }) => {

    React.useEffect(() => {
        //console.log(watchData)
    }, [watchData]);
    return (
        <Container className="w-full bg-[#141118] py-16  overflow-hidden">
            <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
                <Stack spacing={"40px"} className=" px-5 sm:pl-16 md:pr-16">
                    <Box className="flex flex-col space-y-10">
                        <h1 className="text-[#FFFAF6] opacity-[100%] text-base md:text-[22px] xl:text-4xl text-left font-[Inter-SemiBold] capitalize">
                            {title}
                        </h1>
                        <Stack direction="column" spacing={"30px"}>
                            {watchData.map((data, index) => {
                                return <GenreTypes key={index} genreData={data} />;
                            })}
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default FilmsGenre;

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;
`;
