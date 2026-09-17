import React, { useMemo } from 'react'
import Metadata from "../../1-Assets/data/web_metadata.json";
import styled from 'styled-components';
import Buttons from '../../2-Components/Buttons/Buttons';
import ArchiveCard from '../../2-Components/Cards/ArchiveCard';
import archivesCategories from '../../1-Assets/data/archivesCategories.json'
import archivesData from '../../1-Assets/data/archives.json';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from "moment-timezone";
import SEO from '../../2-Components/SEOHelmet/SEO';

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const HeroBg = result.content[1].files[4];
const Logo2 = result.content[2].files[1];


const CLeftSection = () => {
    const [activeTab, setActiveTab] = React.useState("");
    const [allCategories, setAllCategories] = React.useState([]);
    const [monthYearFilter, setMonthYearFilter] = React.useState(null)
    let location = useLocation()
    let navigate = useNavigate()


    React.useEffect(() => {
        setAllCategories(() => ([{
            title: "All"
        }, ...archivesCategories]))
        setActiveTab(() => [{
            title: "All"
        }, ...archivesCategories][0].title)
    }, [archivesCategories, location])

    React.useEffect(() => { 
     //   console.log("location", location.state)

        if (location.state && location.state?.category) {

          
             archivesCategories.filter((data,index) => {
                 if (data.title === location.state.category) {
                    
                    return setActiveTab(() => data.title)
                 } else if (data.title !== location.state.category && index === archivesCategories.length) {
                     return setActiveTab(() => allCategories[0].title)
                }
            })
        } else {
            setActiveTab(() => "All")
        }

        if (location.state && location.state?.month && location.state?.year) {
            setMonthYearFilter({
                year: location.state?.year,
                month: location.state?.month
            })
        } else {
            setMonthYearFilter(()=> null) 
        }

    }, [location])

    const getFilteredData = (tab, filterOption) => {
      return  archivesData.filter((data, index) => {
            let selectMonth = moment(new Date(data.date)).tz("Africa/Kampala").format("MMMM");
            let selectYear = moment(new Date(data.date)).tz("Africa/Kampala").format("YYYY");

            if (selectMonth === filterOption?.month && selectYear === filterOption.year && data.category.includes(tab)) {
                return data
            }
        })
    }

    let filterData = (tab, filterOption) => {
        switch (tab) {
            case "All":
                let AllData = filterOption === null ? archivesData.filter((data) => {
                    return data
                    
                }) : archivesData.filter((data, index) => {
                    let selectMonth = moment(new Date(data.date)).tz("Africa/Kampala").format("MMMM");
                    let selectYear = moment(new Date(data.date)).tz("Africa/Kampala").format("YYYY");

                    if (selectMonth === filterOption?.month && selectYear === filterOption.year) {
                        return data
                    }
                })
                return AllData
            case "Premiere Photos":
                let PremiereData = filterOption === null ? archivesData.filter((data) => {
                    if (data.category.includes(tab)) {
                        return data
                    }

                }) : getFilteredData(tab, filterOption)
                return PremiereData
            case "Festivals":
                let FestivalData = filterOption === null ? archivesData.filter((data) => {
                    if (data.category.includes(tab)) {
                        return data
                    }

                }) : getFilteredData(tab, filterOption)
                return FestivalData
            case "Articles":
                let ArticleData = filterOption === null ? archivesData.filter((data) => {
                    if (data.category.includes(tab)) {
                        return data
                    }

                }) : getFilteredData(tab, filterOption)
                return ArticleData
            case "Behind the scenes":
                let scenesData = filterOption === null ? archivesData.filter((data) => {
                    if (data.category.includes(tab)) {
                        return data
                    }

                }) : getFilteredData(tab, filterOption)
                return scenesData
            default:
                return []
        }
    }

    const displayData = useMemo(() => filterData(activeTab, monthYearFilter), [activeTab, monthYearFilter]);

    // Dynamic SEO computation
    const filterText = monthYearFilter ? ` (${monthYearFilter.month} ${monthYearFilter.year})` : '';
    const seoTitle = `${activeTab !== "All" ? activeTab : "Collections"} Archive${filterText}`;
    const seoDescription = `Explore the ${activeTab.toLowerCase()} collection in the Nyati Motion Pictures Internet Archive${filterText ? ` from ${monthYearFilter.month} ${monthYearFilter.year}` : ''}. Browse through premiere highlights, festival appearances, articles, and behind-the-scenes content.`;
    const canonicalUrl = `https://www.nyatimotionpictures.com/internetarchive/collections${activeTab !== "All" ? `?category=${encodeURIComponent(activeTab)}` : ''}`;

    const collectionsSchema = {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        "name": `Nyati Motion Pictures - ${seoTitle}`,
        "headline": "Where Epic Stories Transcend Entertainment",
        "description": seoDescription,
        "url": canonicalUrl,
        "publisher": {
            "@type": "LocalBusiness",
            "name": "Nyati Motion Pictures",
            "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
            "telephone": "+256 778 787 660",
            "email": "info@nyatimotionpictures.com"
        }
    };

    return (
        <Container className=" box-border flex flex-col w-full min-h-[70vh] h-full flex-grow xl:min-h-full lg:min-h-screen lg:items-center lg:justify-center relative overflow-hidden ">
            {/* SEO Helmet Metadata */}
            <SEO 
                title={seoTitle}
                description={seoDescription}
                keywords={`Nyati Motion Pictures archive, ${activeTab.toLowerCase()}, Ugandan film archive, East African film collections, movie premieres Uganda, behind the scenes`}
                url={canonicalUrl}
                structuredData={collectionsSchema}
            />
            
            {/** navigation */}
            <nav className="w-full h-[85px]  absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12 xl:px-12 overflow-visible !bg-[#ffffff]">

                <div className="flex lg:flex flex-row items-center gap-[35px]">
                    <Buttons
                        onClick={() => navigate("/")}
                        variant="ghost"
                        size="icon"
                        className="w-max h-max p-0 hover:bg-secondary-50 hover:bg-opacity-30"
                    >
                        <img
                            src={Logo2}
                            className="w-[55.74px] h-[56.02px] lg:w-[55.74px] lg:h-[56.02px] xl:w-[65.74px] xl:h-[66.02px] navbar-brand cursor-pointer"
                            alt="logo"
                        />
                    </Buttons>
                </div>

                <div className="hidden md:flex flex-row gap-[4px]">
                    {
                        allCategories.map((data) => {
                            return <Buttons key={data.title} onClick={() => location.state?.category ? navigate(`/internetarchive/collections?category=${data.title}`, {
                                  state: {
                                      category: data.title
                                  }
                              }) : setActiveTab(() => data.title)} className={`font-[Inter-Medium] text-sm py-[8.5px] px-[12px] bg-transparent text-[#7F7075] hover:bg-transparent border border-transparent hover:border-primary-500 ${data.title === activeTab ? "border-primary-500 bg-[#928587] bg-opacity-5 text-[#141118]" : "text-[#7F7075] border-transparent" }`}>{data.title}</Buttons>
                        })
        }
                </div>

                <Buttons onClick={() => navigate("/internetarchive")} className="select-none bg-primary-500 rounded-full px-5 font-[Roboto-Medium] text-sm">
                    <p>Hide list</p>
                </Buttons>
            </nav>
            <div className="h-full min-h-[80vh] w-full mt-[105px]  overflow-y-auto">
                <div className="flex  flex-wrap justify-center gap-[15px] w-full px-[31px] pb-[52px]">
                    {
                        displayData.length > 0 ? (
                            <>
                                {
                                    displayData.map((data, index) => {
                                        return <ArchiveCard key={index} data={data} />
                                    })
                                }
                            </>
                        ) : (
                                <div className="w-[217px]  flex flex-col gap-0 rounded-[3px] overflow-hidden cursor-pointer select-none text-center">
                                    <h1 className="font-[Inter-Medium] text-xl  text-[#374151]">No records available at the moment.</h1>
                                </div>
                        )
                    }
                    

                </div>
            </div>
        
        </Container>
    )
}

export default CLeftSection

const Container = styled.div`

`;