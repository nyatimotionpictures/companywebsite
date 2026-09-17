import React from "react";
import styled from "styled-components";
//import MovieCarousel from "../../2-Components/Carousels/MovieCarousel";
import { Box, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getWebFilmData,
  reset as wreset,
} from "../../5-Store/reduxState/features/WebMovies/wmovieSlice";
import FilmLists from "../../2-Components/Lists/FilmLists";
import FilmJSON from '../../1-Assets/data/film_metadata.json'

const FilmsWatchList = () => {
  let dispatch = useDispatch();
  const [randomizedList, setRandomizedList] = React.useState([])
  const { allFilmItems, isSuccess, isLoading, isError } = useSelector(
    (state) => state.wfilm
  );

  React.useEffect(() => {
    dispatch(getWebFilmData());

    return () => {
      // second
      dispatch(wreset())
    };
  }, [dispatch]);

  //console.log("all items", FilmJSON)
  const shuffleArray = (array) => {
    //console.log("array", array);
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const endItems = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[endItems]] = [
        shuffledArray[endItems],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  React.useEffect(() => {
    const shuffledItems = shuffleArray(FilmJSON);
    let limitedList = shuffledItems.slice(0, 5);
    setRandomizedList(limitedList);
  }, [FilmJSON]);

  // console.log("allfilmsData", allFilmItems);
  return (
    <Container className="w-full bg-[#141118] py-4 md:py-16  overflow-hidden">
      <Box className="w-full mx-auto flex md:gap-10 lg:gap-16  xl:gap-24 items-start px-4 sm:pl-16 md:pr-16">
        <FilmLists title={"Start Watching"} displayData={randomizedList} />
      </Box>
    </Container>
  );
};

export default FilmsWatchList;

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;
`;
