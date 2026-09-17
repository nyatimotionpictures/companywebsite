import React from 'react';
import NoImage from '../../1-Assets/no-image.svg';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';

const ArchiveCard = ({data}) => {
    const [isImgBroken, setIsImgBroken] = React.useState(false);
    let navigate = useNavigate()

    
    const handleImgError = ()=> {
        setIsImgBroken(true)
    }

    let selectedDate = moment(new Date(data.date)).tz("Africa/Kampala").format("MMM DD YYYY")
    return (
        <div onClick={() => data.a_tag_type === "Internal" ? navigate(`/internetarchive/collections/${data._id}`) : window.location.href = `${data.a_tag_link}`} className="w-[217px] h-[240px] flex flex-col gap-0 rounded-[3px] overflow-hidden cursor-pointer select-none">
            <div className="w-full h-[148px] object-cover">
                <img onError={handleImgError} src={isImgBroken ? NoImage : data.imageUrl} alt={"image"} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col px-[16px] py-[16px] gap-[11px] w-full bg-[#ffffff]">
                <h1 className="font-[Inter-SemiBold] text-[13px] truncate">{data.title}</h1>
                <div className="flex flex-row justify-between text-[#7F7075] font-[Inter-Regular] text-[12px] ">
                    <p>{selectedDate}</p>
                    <p>{data.source}</p>
                </div>
            </div>
        </div>
    )
}

export default ArchiveCard