import React from 'react';
import NoImage from '../../1-Assets/large_no-image.svg'

const ImageCard = ({ data, handleOpenModal, imgindex }) => {
    const [isImgBroken, setIsImgBroken] = React.useState(false);

    const handleImgError = () => {
        setIsImgBroken(true)
    }
  return (
      <div onClick={() => handleOpenModal(imgindex)} className="w-[134px] h-[134px] md:w-[290px] md:h-[235px] xl:w-[300px] object-cover overflow-hidden  transition ease-in-out delay-150">
          <img onError={handleImgError} src={isImgBroken ? NoImage : data} alt={"image"} className="w-full h-full object-cover hover:scale-[1.20] hover:transition-all transition ease-in-out delay-220 cursor-pointer" />
      </div>
  )
}

export default ImageCard