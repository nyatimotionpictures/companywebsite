import React from 'react'
import { Stack, Box, Modal, ModalContent, ModalOverlay, ModalBody, Button } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import DetailTabs from './DetailTabs';
import DetailHero from './DetailHero';
import Navigation from '../../2-Components/Navigation/Navigation';
import styled from "styled-components";
import FilmJSON from '.../../../../1-Assets/data/film_metadata.json'
import Footer from '../../2-Components/Footer/Footer';
import { Dialog, DialogContent } from '@mui/material';
import SEO from '../../2-Components/SEOHelmet/SEO';


const FilmDetailPage = () => {
    let { filmid } = useParams();
    const [trailerOpenModal, setOpenTrailerModal] = React.useState(false);
    const [trailerLocalOpenModal, setLocalOpenTrailerModal] = React.useState(false);
    const [selectedTrailer, setSelectedTrailer] = React.useState("");
    const [singleWebFilm, setSingleWebFilm] = React.useState(null);
    const [loading, setLoading] = React.useState(true)


    // const { singleWebFilm, isSuccess, isLoading, isError } = useSelector(
    //     (state) => state.wfilm
    // );

    React.useEffect(() => {
        // dispatch(getSingleWebFilmData(filmid));
        
        let findSingleFilm = FilmJSON.find((data => data._id.$oid === filmid));

        if (findSingleFilm) {
            setSingleWebFilm(() => findSingleFilm)
            setLoading(()=> false)
        } else {
            setSingleWebFilm(() => null)
            setLoading(() => false)
        }

        return () => {
            // second
        };
    }, [filmid]);

  const filmIdSchema = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness", // Consider changing this to "Movie" for film pages
        "name": singleWebFilm ? singleWebFilm.title : "Nyati Motion Pictures",
        "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
        "url": `https://www.nyatimotionpictures.com/film/${filmid}`,
        "telephone": "+256 778 787 660",
        "email": "info@nyatimotionpictures.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wakiso",
            "addressCountry": "Uganda",
            "postalCode": "74733"
        },
        "sameAs": [
            "https://x.com/NyatiMPictures",
            "https://www.facebook.com/nyati.motionpictures",
            "https://www.youtube.com/@Nyatimotionpictures"
        ]
    };

    // Set up fallbacks for SEO content while the film data is loading
    const seoTitle = singleWebFilm?.title || "Featured Film";
    const seoDescription = singleWebFilm?.overview || singleWebFilm?.synopsis || "Explore this captivating film by Nyati Motion Pictures, showcasing the rich storytelling heritage of Uganda and East Africa.";
    const seoImage = singleWebFilm?.posters || "https://www.nyatimotionpictures.com/og-image.jpg";

    const onOpen_T_Modal = () => {
        setOpenTrailerModal(() => true);
    };
    const onClose_T_Modal = () => {
        setOpenTrailerModal(() => false);
    };

    {/** open local Modal */ }
    const onOpen_L_Modal = () => {
        setLocalOpenTrailerModal(() => true);
    };
    const onClose_L_Modal = () => {
        setLocalOpenTrailerModal(() => false);
    };

    
  return (
      <>
        {/* Dynamically passing the loaded film data to the SEO component */}
            <SEO 
                title={seoTitle} 
                description={seoDescription}
                keywords="Nyati Motion Pictures films, Ugandan films, East African documentaries, feature films Uganda"
                url={`https://www.nyatimotionpictures.com/film/${filmid}`}
                image={seoImage}
                structuredData={filmIdSchema}
            />{/* Added SEO component here for SEO metadata */}
      
          <Container className="px-0 w-full h-full relative flex-col space-y-0 bg-secondary-800 overflow-x-hidden">
              <Navigation />

              <Stack className="flex-col w-full h-full space-y-0">
                  <DetailHero filmData={singleWebFilm} />
                  
                  <div className="px-0 sm:px-16">
                      <DetailTabs
                          openModal={onOpen_T_Modal}
                          filmData={singleWebFilm}
                          setSelectedTrailer={setSelectedTrailer}
                          openLocalModal={onOpen_L_Modal}
                      />
                  </div>

                 
                
              </Stack>
              <Footer />

              {/** Modal for trailer **/}
              <Dialog
                  blockScrollOnMount={false}
                  onClose={onClose_T_Modal}
                  open={trailerOpenModal}
                  isCentered
                  width="100vw"
                  sx={{
                      "& .MuiDialog-paper": {
                          width: "60vw",
                          maxHeight: 435,
                          height: 435,
                          margin: 0,
                          padding: 0,
                          background: "transparent",
                      },
                      "& .MuiDialogContent-root": {
                          maxHeight: 435,
                          height: 435,
                          margin: 0,
                          padding: 0,
                      },
                      margin: 0,
                      padding: 0,
                  }}
                  maxWidth="md"
                  className="!bg-primary-500"
              >
                  <DialogContent className="bg-primary-500">
                      <Box>
                          <Box
                              sx={{
                                  width: "100%",
                                  height: 435,
                                  position: "relative",
                                  overflow: "hidden",
                                  borderRadius: "2px",
                              }}
                          >
                              {
                                  /*** 
                                   * 
                                   *   //   <ReactPlayer
                            //       url={selectedTrailer}
                            //       width="100%"
                            //       height="100%"
                            //   />
                                   * 
                                   * 
                                   */
                              }
                          

                              <Box
                                  style={{
                                      display: "flex",
                                      position: "absolute",
                                      width: "max-content",
                                      top: 10,
                                      right: 0,
                                  }}
                              >
                                  <Button
                                      style={{
                                          background: "transparent",
                                          border: "none",
                                          padding: "4px",
                                          margin: 0,

                                          borderRadius: "34px",
                                          width: "max-content",
                                          height: "max-content",
                                          display: "flex",
                                      }}
                                      onClick={onClose_T_Modal}
                                  >
                                      <span
                                          className="icon-[ion--close]"
                                          style={{ width: "34px", height: "34px" }}
                                      ></span>
                                  </Button>
                              </Box>
                          </Box>
                      </Box>
                  </DialogContent>
              </Dialog>

              {/*** local Player */}
          </Container>

          {trailerLocalOpenModal && (
              <Modal
                  blockScrollOnMount={true}
                  onClose={onClose_L_Modal}
                  isOpen={trailerLocalOpenModal}
                  isCentered
                  size={''}
              >
                  <ModalOverlay />
                  <ModalContent>
                      <ModalBody>
                          <div>
                              <div className="flex w-[500px] h-[600px]">
                                  <div className="flex flex-col items-center w-[500px] h-[600px] bg-secondary-500">
                                      <TrailerCustomPlayer
                                          videoSrc={selectedTrailer}
                                          title="trailer"
                                      />
                                  </div>

                                  <Box
                                      style={{
                                          display: "flex",
                                          position: "absolute",
                                          width: "max-content",
                                          top: 10,
                                          right: 0,
                                      }}
                                  >
                                      <Button
                                          style={{
                                              background: "transparent",
                                              border: "none",
                                              padding: "4px",
                                              margin: 0,

                                              borderRadius: "34px",
                                              width: "max-content",
                                              height: "max-content",
                                              display: "flex",
                                          }}
                                          onClick={onClose_L_Modal}
                                      >
                                          <span
                                              className="icon-[ion--close]"
                                              style={{ width: "34px", height: "34px" }}
                                          ></span>
                                      </Button>
                                  </Box>
                              </div>
                          </div>
                      </ModalBody>
                  </ModalContent>
              </Modal>
          )}
      </>
  )
}

export default FilmDetailPage

const Container = styled(Stack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
