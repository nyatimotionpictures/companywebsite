import React from 'react'
import NoImage from '../../1-Assets/large_no-image.svg'

const HUpcomingEvents = () => {
    return (
        <div className="w-full bg-[#21151d] py-16 md:pl-12 overflow-hidden ">

            <div className="mx-auto flex flex-col-reverse items-center gap-8 md:gap-14 md:flex-row lg:flex-row lg:gap-16 lg:max-w-[1000px] xl:gap-16 relative">
                {/** text section */}
                <div className="h-max mx-[41px]  max-w-[278px] md:mx-0 md:w-[278px] lg:w-[388px] lg:max-w-max flex flex-col justify-center gap-[20px]">
                    <h1 className="font-[Inter-SemiBold] font-bold text-2xl text-left md:text-left lg:text-left sm:text-3xl md:text-5xl lg:text-5xl capitalize text-whites-50 ">Upcoming Events</h1>
                    <p className="font-[Inter-Regular] text-[#FFFAF6] text-opacity-70 text-lg"><span> ⟢ </span>Global Screening of <span className="font-[Inter-Medium] italic">Tuko Pamoja Docuseries</span>.</p>
                    <p className="font-[Inter-Regular] text-[#FFFAF6] text-opacity-70 text-lg"><span> ⟢ </span>Official Launch of Nyatiflix App.</p>
                    <p className="font-[Inter-Regular] text-[#FFFAF6] text-opacity-70 text-lg"><span> ⟢ </span>Fundraising events for <span className="font-[Inter-Medium] italic">Conquer or Die</span> (Live Action Series).</p>
                    <p className="font-[Inter-Medium] text-base text-[#FFFAF6] text-opacity-70">For more information, contact us on
                    </p>
                    <div className="flex flex-col gap-[20px]">
                        <p className="font-[Inter-Regular] text-[#FFFAF6] text-opacity-70 text-base">Telephone: <br className="block md:hidden" /> +256778787660 (WhatsApp)
                            </p>
                        <p className="font-[Inter-Regular] text-[#FFFAF6] text-opacity-70 text-base">
                            Email: <br className="block md:hidden" /> info@nyatimotionpictures.com </p>
                    </div>
                   
                </div>
        {/** Images  */}
                <div className="h-[247px] md:h-[421px] flex flex-row justify-center gap-[20px] relative">
                    <div className="h-max md:absolute flex flex-row justify-center gap-[11px] md:gap-[20px] md:left-0">
                        <div className="w-[151.33px] h-[227.95px] md:w-[257.93px] md:h-[388.54px] rounded-[3.15px] overflow-hidden mt-[32.53px]">
                            <img src={`https://ik.imagekit.io/nyatimot/Pages/Universal+Home/images/image_1.png?updatedAt=1726823699203`} alt="events" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[240.26px] h-[230.16px] md:w-[409.52px] md:h-[392.3px] rounded-[2.87px] overflow-hidden">
                            <img src={`https://ik.imagekit.io/nyatimot/Pages/Universal+Home/images/Image_2.png?updatedAt=1726823701364`} alt="events" className="w-full h-full object-cover" />
                        </div>
                    </div>
                 
                </div>

            </div>

        </div>
    )
}

export default HUpcomingEvents  