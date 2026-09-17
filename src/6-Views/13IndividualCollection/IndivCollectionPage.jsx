import React, { useMemo } from 'react';
import Metadata from "../../1-Assets/data/web_metadata.json";

import Buttons from '../../2-Components/Buttons/Buttons';
const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const Logo2 = result.content[2].files[1];

import Footer from '../../2-Components/Footer/Footer';
import ImageCard from '../../2-Components/Cards/ImageCard';
import archivesData from '../../1-Assets/data/archives.json';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import SEO from '../../2-Components/SEOHelmet/SEO'; // Imported SEO Component

const TabList = [
    {
        title: "Premiere highlights"
    },
    {
        title: "Screenshots"
    },
    {
        title: "Production shots"
    },
    {
        title: "behind-the-scenes moments"
    }
];

const IndivCollectionPage = () => {
    let { cname } = useParams();
    let navigate = useNavigate();
    const [extractedArchive, setExtractedArchive] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState("");
    const [slideNumber, setSlideNumber] = React.useState(0);
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        setActiveTab(() => TabList[0].title);
    }, [cname]);

    React.useEffect(() => {
        if (cname && cname !== undefined && cname !== null) {
            archivesData.filter((data) => {
                if (data._id === cname) {
                    return setExtractedArchive(() => data);
                }
            });
        }
    }, [cname]);

    React.useEffect(() => {
        if (openModal) {
            if (typeof window !== "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
        } else {
            document.body.style.overflow = "unset";
        }
    }, [openModal]);

    let filterData = (tab) => {
        switch (tab) {
            case "Premiere highlights":
                let pdata = extractedArchive !== null ? extractedArchive.priemer : [];
                return pdata;
            case "Screenshots":
                let sdata = extractedArchive !== null ? extractedArchive.screenshot : [];
                return sdata;
            case "Production shots":
                let pddata = extractedArchive !== null ? extractedArchive.production : [];
                return pddata;
            case "behind-the-scenes moments":
                let bsdata = extractedArchive !== null ? extractedArchive.behindscenes : [];
                return bsdata;
            default:
                return [];
        }
    };

    const displayData = useMemo(() => filterData(activeTab), [activeTab, extractedArchive]);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setSlideNumber(0);
        setOpenModal(false);
    };

    const handleNextSlide = () => {
        slideNumber + 1 === displayData.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    };
    const handlePrevSlide = () => {
        slideNumber === 0 ? setSlideNumber(displayData.length - 1) : setSlideNumber(slideNumber - 1);
    };

    // SEO Data Computations
    const pageTitle = extractedArchive?.title ? `${extractedArchive.title}` : "Collection Not Found";
    const pageDescription = extractedArchive?.description || "Explore premiere highlights, behind-the-scenes moments, and archival images from Nyati Motion Pictures.";
    const canonicalUrl = `https://www.nyatimotionpictures.com/internetarchive/collections/${cname || ''}`;
    const shareImage = displayData?.[0] || "https://www.nyatimotionpictures.com/og-image.jpg";

    const collectionSchema = {
        "@context": "http://schema.org",
        "@type": "ImageGallery",
        "name": pageTitle,
        "description": pageDescription,
        "url": canonicalUrl,
        "publisher": {
            "@type": "LocalBusiness",
            "name": "Nyati Motion Pictures",
            "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
            "telephone": "+256 778 787 660",
            "email": "info@nyatimotionpictures.com"
        }
    };

    // Render logic when collection doesn't exist
    if (extractedArchive === null) {
        return (
            <>
                <SEO 
                    title="Archive Collection Not Found" 
                    description="The requested Internet Archive collection could not be found. Contact Nyati Motion Pictures for assistance."
                    url={canonicalUrl}
                />
                <div className="box-border w-full h-full flex flex-col gap-0 flex-grow overflow-hidden !bg-[#f2f2f2] select-none">
                    <div className="box-border w-full h-full flex flex-row items-center justify-center gap-0 flex-grow overflow-hidden bg-[#f2f2f2] min-h-screen mt-[150px] pb-[100px]">
                        {/** navigation */}
                        <nav className="w-full h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12 xl:px-12 overflow-visible !bg-[#ffffff]">
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

                                <h1 className=" hidden xl:flex font-[Inter-Medium] text-lg text-[#928587]">Internet Archive</h1>
                            </div>

                            <Buttons onClick={() => navigate("/internetarchive/collections")} className="select-none bg-primary-500 rounded-full px-5 font-[Roboto-Medium] text-[10px] md:text-sm">
                                <p>More Collections</p>
                            </Buttons>
                        </nav>

                        <div className="px-[15px] md:px-[44px] xl:px-[60px] py-[50px] flex flex-col !bg-[#ffffff] max-w-[310px] sm:max-w-[610px] md:max-w-[720px] lg:max-w-[820px] xl:max-w-[1011px] gap-[24px] ">
                            <div className="min-h-[285px] w-full flex flex-col items-center justify-center">
                                <div className="max-w-[240px] flex flex-col gap-[10px]">
                                    <h1 className="font-[Inter-Medium] text-[19px] text-gray-700 text-center"><span className="text-red-600">Ooops!!! SomeThing is Wrong.</span> <br /> Please Check Archive</h1>

                                    <div className="flex flex-col gap-[10px]">
                                        <div className="text-center flex flex-col font-[Inter-Regular] text-[13px] text-gray-700">
                                            <p>Please contact our team at </p>
                                            <p className="font-[Inter-SemiBold]">+256 778 787 660</p>
                                            <p>or email us at</p>
                                            <p><span className="font-[Inter-SemiBold]">info@nyatimotionpictures.com</span> or </p>
                                            <p><span className="font-[Inter-SemiBold]">nyatimotionpictures@gmail.com</span> </p>
                                        </div>
                                        <p className="text-[13px] font-[Inter-Regular] text-gray-700 text-center">You can also visit our social platforms for more information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            {/* Dynamic SEO Tags */}
            <SEO 
                title={`${pageTitle} (${activeTab})`}
                description={pageDescription}
                keywords={`${extractedArchive?.title || ''}, Nyati Motion Pictures archive, ${activeTab.toLowerCase()}, Ugandan film photos, East African cinema collection`}
                url={canonicalUrl}
                image={shareImage}
                structuredData={collectionSchema}
            />

            <div className="box-border w-full h-full flex flex-col gap-0 flex-grow overflow-hidden !bg-[#f2f2f2] select-none">
                <div className="box-border w-full h-full flex flex-row items-center justify-center gap-0 flex-grow overflow-hidden bg-[#f2f2f2] md:min-h-screen mt-[150px] pb-[100px]">
                    {/** navigation */}
                    <nav className="w-full h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12 xl:px-12 overflow-visible !bg-[#ffffff]">
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

                            <h1 className=" hidden xl:flex font-[Inter-Medium] text-lg text-[#928587]">Internet Archive</h1>
                        </div>

                        <Buttons onClick={() => navigate("/internetarchive/collections")} className="select-none bg-primary-500 rounded-full px-5 font-[Roboto-Medium] text-[10px] md:text-sm">
                            <p>More Collections</p>
                        </Buttons>
                    </nav>

                    <div className="px-[15px] md:px-[44px] xl:px-[60px] py-[50px] flex flex-col !bg-[#ffffff] max-w-[310px] sm:max-w-[610px] md:max-w-[720px] lg:max-w-[820px] xl:max-w-[1081px] gap-[24px] ">
                        {/** title & subtext*/}
                        <div className="flex flex-col gap-[17px]">
                            <h1 className="font-[Inter-SemiBold] text-base md:text-[24px] text-[#000000]">{extractedArchive !== null && extractedArchive?.title}</h1>

                            <p className="font-[Inter-Regular] text-xs md:text-base text-[#000000] text-opacity-70">{extractedArchive !== null && extractedArchive?.description}
                            </p>
                        </div>

                        {/** tabs & content */}
                        <div className="flex flex-col gap-[28px]">
                            {/** tabs */}
                            <div className="flex flex-row gap-[5px] overflow-hidden overflow-x-scroll">
                                {TabList.map((data, index) => {
                                    return <Buttons key={data.title} onClick={() => setActiveTab(() => data.title)} className={`font-[Inter-Medium] text-nowrap text-[13px] md:text-sm py-[8.5px] lg:px-[12px] bg-transparent hover:bg-transparent hover:border-primary-500 border ${data.title === activeTab ? "border-primary-500 bg-[#928587] bg-opacity-5 text-[#141118]" : "text-[#7F7075] border-transparent"}`}>{data.title}</Buttons>
                                })}
                            </div>

                            {/** Images */}
                            {
                                displayData.length > 0 ? (
                                    <div className="min-h-[285px] w-full flex flex-wrap gap-[10px] sm:gap-[16px]">
                                        {
                                            displayData.map((data, index) => {
                                                return <ImageCard key={index} data={data} handleOpenModal={handleOpenModal} imgindex={index} />
                                            })
                                        }
                                    </div>
                                ) : (
                                    <div className="min-h-[285px] w-full flex flex-col items-center justify-center">
                                        <div className="max-w-[240px] flex flex-col gap-[10px]">
                                            <h1 className="font-[Inter-Medium] text-[19px] text-gray-700 text-center">No images available at the moment.</h1>

                                            <div className="flex flex-col gap-[10px]">
                                                <div className="text-center flex flex-col font-[Inter-Regular] text-[13px] text-gray-700">
                                                    <p>Please contact our team at </p>
                                                    <p className="font-[Inter-SemiBold]">+256 778 787 660</p>
                                                    <p>or email us at</p>
                                                    <p><span className="font-[Inter-SemiBold]">info@nyatimotionpictures.com</span> or </p>
                                                    <p><span className="font-[Inter-SemiBold]">nyatimotionpictures@gmail.com</span> </p>
                                                </div>
                                                <p className="text-[13px] font-[Inter-Regular] text-gray-700 text-center">You can also visit our social platforms for more information.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <Footer />

                {/** Image slider */}
                {
                    openModal && <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-secondary-800 bg-opacity-90 flex items-center justify-center w-screen h-screen overflow-hidden transition-all">
                        {/** icons */}
                        <Buttons variant={'ghost'} size={'icon'} className=" fixed p-0 px-0 py-0 w-max h-max text-whites-50 bg-transparent hover:bg-transparent hover:text-primary-500 top-5 right-5 md:top-10 md:right-10 hover:opacity-100 cursor-pointer z-50 md:opacity-[0.6] transition-none" onClick={handleCloseModal}>
                            <Icon icon="zondicons:close-outline" className="w-6 h-6 md:w-9 md:h-9" />
                        </Buttons>

                        <Buttons variant={'ghost'} size={'icon'} className="fixed p-0 px-0 py-0 w-max h-max text-whites-50 bg-transparent hover:bg-transparent hover:text-primary-500 top-1/2 right-5 md:right-10 -translate-y-1/2 hover:opacity-100 cursor-pointer z-50 opacity-[0.7] md:opacity-[0.6] transition-none" onClick={handleNextSlide}>
                            <Icon icon="icon-park-twotone:right-c" className="w-9 h-9" />
                        </Buttons>

                        <Buttons variant={'ghost'} size={'icon'} className="fixed p-0 px-0 py-0 w-max h-max text-whites-50 bg-transparent hover:bg-transparent hover:opacity-100 hover:text-primary-500 top-1/2 left-5 md:left-10 -translate-y-1/2 cursor-pointer z-50 opacity-[0.7] md:opacity-[0.6] transition-none" onClick={handlePrevSlide}>
                            <Icon icon="icon-park-twotone:left-c" className="w-9 h-9" />
                        </Buttons>

                        <div className={`!w-[calc(100%-40px)] !h-[calc(100%-40px)] flex items-center justify-center z-10`}>
                            <img src={displayData[slideNumber]} alt={""} className="max-w-full max-h-full pointer-events-none select-none " />
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default IndivCollectionPage;