import React from 'react'
import NoImage from '../../1-Assets/large_no-image.svg'
import Buttons from '../Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
const AchievedFilmCard = ({data}) => {
    const [isImgBroken, setIsImgBroken] = React.useState(false);
    let navigate = useNavigate()

    const handleImgError = () => {
        setIsImgBroken(true)
    }
  return (
      <div className="flex flex-col md:flex-col lg:flex-row gap-[40px]">
          {/** Image */}
          <div className="flex w-[152px] h-[197px]">
              <img onError={handleImgError} src={isImgBroken ? NoImage : data.img}  alt="" className="w-full h-full object-cover" />
          </div>
          {/** text */}
          <div className="flex flex-col max-w-[280px] md:max-w-[300px] lg:max-w-[580px] gap-[15px] py-[10px]">
              <h1 className="font-[Inter-SemiBold] text-[#F2F2F2] text-opacity-70 text-base">{data.title}</h1>
              <p className="font-[Inter-Regular] text-[#F2F2F2] text-opacity-70 md:text-sm lg:text-base select-none">{data.desc}</p>

              {
                  data.path ? <Buttons onClick={() => navigate(data.path)} className="w-max px-[6.92px] py-[6.05px] text-primary-500 bg-transparent font-[Inter-SemiBold]">Read more</Buttons> : <div className="w-max px-[6.92px] py-[10px] bg-transparent font-[Inter-SemiBold]"></div>
              }
             
          </div>
      </div>
  )
}

export default AchievedFilmCard