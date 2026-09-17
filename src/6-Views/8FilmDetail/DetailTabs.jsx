import React from 'react'
import ContentTab from '../../2-Components/TabLists/ContentTab';
import MoreLikeTab from '../../2-Components/TabLists/MoreLikeTab';
import EpisodeTab from '../../2-Components/TabLists/EpisodeTab';
import ExploreTab from '../../2-Components/TabLists/ExploreTab';
import { Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import styled from 'styled-components';
import { Box, Stack } from '@chakra-ui/react';

const DetailTabs = ({
    filmData,
    openModal,
    setSelectedTrailer,
    openLocalModal,
}) => {

    const [filmType, setFilmType] = React.useState(null);
    const [loadingFilmData, setLoadingFilmData] = React.useState(true);
    const [currentTabValue, setCurrentTabValue] = React.useState(null);
    const [displayTabs, setDisplayTabs] = React.useState([]);

    React.useEffect(() => {
        if (filmData !== null) {
            if (
                filmData?.filmType.toLowerCase() === "movie" ||
                filmData?.filmType.toLowerCase() === "film"
            ) {
                setFilmType(() => filmData.filmType);
                setDisplayTabs(() => [
                    {
                        title: "Details",
                        position: "one",
                    }
                ]);
                setCurrentTabValue(() => "one");
            } else if (
                filmData?.filmType.toLowerCase() === "series" ||
                filmData?.filmType.toLowerCase() === "segments" ||
                filmData?.filmType.toLowerCase().includes("series")
            ) {
                setFilmType(() => filmData.filmType);
                setDisplayTabs(() => [
                    {
                        title: "Episodes",
                        position: "one",
                    },
                    {
                        title: "Details",
                        position: "two",
                    }
                   
                ]);
                setCurrentTabValue(() => "one");
            }
        } else {
            setFilmType(() => null);
        }

        return () => {
            setLoadingFilmData(true);
            setFilmType(() => null);
        };
    }, [filmData, filmData?.title, filmData?.filmType]);

    const handleTabChange = (event, newValue) => {
        setCurrentTabValue(() => newValue);
    };

    const TabDisplay = (datakey) => {
        switch (datakey) {
            case "Details":
                return <ContentTab filmdata={filmData} />;
            case "More like":
                return <MoreLikeTab filmdata={filmData} />;
            case "Episodes":
                return (
                    <EpisodeTab
                        openModal={openModal}
                        filmdata={filmData}
                        setSelectedTrailer={setSelectedTrailer}
                        openLocalModal={openLocalModal}
                    />
                );
            default:
                break;
        }
    };
  return (
      <Container className="min-h-[60vh] ">
          {displayTabs?.length > 0 && (
              <TabContext value={currentTabValue !== null && currentTabValue}>
                  <Box className="w-screen space-x-5 border-primary-500">
                      <Tabs
                          value={currentTabValue !== null && currentTabValue}
                          onChange={handleTabChange}
                          TabIndicatorProps={{ style: {backgroundColor: "#EE5070"}}}
                          sx={{ margin: "4px" }}
                      >
                          {displayTabs.map((data, index) => {
                              return (
                                  <Tab
                                      className="text-whites-40 mr-6 font-[Inter-SemiBold] capitalize text-base"
                                      key={index}
                                      value={data.position}
                                      label={data.title}
                                  />
                              );
                          })}
                      </Tabs>
                  </Box>

                  {displayTabs.map((data, index) => {
                      return (
                          <TabPanel key={index} value={data.position}>
                              {TabDisplay(data.title)}
                          </TabPanel>
                      );
                  })}
              </TabContext>
          )}
      </Container>
  )
}


export default DetailTabs

const Container = styled(Stack)``;