import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../2-Components/Footer/Footer'
import CLeftSection from './CLeftSection'
import CRightSection from './CRightSection'




const CollectionListPage = () => {
   
    

  return (
      <div  className="box-border w-full h-full flex flex-col gap-0 flex-grow overflow-hidden">
          <div className="overrallHeight box-border w-full h-full flex flex-row  gap-0 flex-grow overflow-hidden">
              {/** first section */}
              <div className="xl:w-[60%] bg-[#f2f2f2] ">
                  <CLeftSection />
              </div>
              {/** second section */}
              <div  className="imagewrapper hidden xl:flex w-[40%] min-h-full bg-[#18161C] relative overflow-hidden ">
                  
                  <div  className={` fixed flex  top-0 z-50`}>
                      <CRightSection />
                  </div> 
                
                  
              </div>
          </div>

          <div  className="flex z-50">
              <Footer />
          </div>
        
      </div>
  )
}

export default CollectionListPage