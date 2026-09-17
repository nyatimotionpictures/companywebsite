import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./MovieSlide.css";
//import { div, Stack } from "@chakra-ui/react";
import FilmJson from "../../1-Assets/data/film_metadata.json";
import MovieCard from "../Cards/MovieCard";
import MovieCard2 from "../Cards/MovieCard2";

const MovieCarousel = ({ displayData = [], cardtype }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true });
    const [allMovies, setAllMovies] = React.useState([]);
    const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        // first
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // React.useEffect(() => {
    //   setAllMovies(() => FilmJson);
    // }, [FilmJson]);

    const breakpoints = {
        mobile: 480,
        tablet: 768,
        screen: 1028,
    };

    const config = {
        mobile: {
            slidesToScroll: 1,
            slidesToShow: 1,
        },
        tablet: {
            slidesToScroll: 2,
            slidesToShow: 2,
        },
        desktop: {
            slidesToScroll: 3,
            slidesToShow: 3,
        },
    };

    return (
        <div className="emblaA w-full">
            <div className="embla__viewportA !w-full" ref={emblaRef}>
                <div className="embla__containerA flex items-start justify-start gap-5 !w-full ml-0">
                    {displayData.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`embla__slideA h-full flex-none ${cardtype === "genre" && "md:w-[420px]"
                                    } ${cardtype === undefined && "md:w-[340px]"}`}
                            >
                                <div className="embla__slide__movie w-max gap-0">
                                    {cardtype === "genre" && <MovieCard2 data={data} />}
                                    {cardtype === undefined && <MovieCard data={data} />}

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MovieCarousel;
