import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ArchivesJson from '../../1-Assets/data/archives.json';
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import archivesCategories from '../../1-Assets/data/archivesCategories.json'
import { Icon } from "@iconify/react";

const RightSection = () => {
    const [expandedYear, setExpandedYear] = useState(null);
    const [allCollectedYears, setAllCollectedYears] = useState([])
    const navigate = useNavigate();

    React.useEffect(() => {
        let mappedArray = [];
          ArchivesJson.map((data) => {
            
            let selectMonth = moment(new Date(data.date)).tz("Africa/Kampala").format("MMMM");
            let selectYear = moment(new Date(data.date)).tz("Africa/Kampala").format("YYYY");
           // console.log("selectedDate", selectMonth, selectYear)

              if (mappedArray.length > 0) {
                  for (let iteration = 0; iteration < mappedArray.length; iteration++){
                      let ttIteration = iteration + 1;

                      if (mappedArray[iteration].year === selectYear) {
                          let monthArray = mappedArray[iteration].months
                          if (monthArray.includes(selectMonth)) {
                              return
                          } else {
                           return   mappedArray[iteration].months = [...monthArray, selectMonth].sort()
                          }
                      }

                      if (mappedArray[iteration].year !== selectYear && ttIteration === mappedArray.length) {
                          return mappedArray.push({
                              year: selectYear,
                              months: [selectMonth]
                          })
                      }
                  }
            
              } else {
                  return   mappedArray.push({
                      year: selectYear,
                      months: [selectMonth]
                  })
                  
           }
          })
        
        let sortedArray = mappedArray.sort((a, b) => b.year - a.year)
        
        //console.log("Months", sortedArray)
        setAllCollectedYears(() => sortedArray) 
    }, [ArchivesJson])


    const handleToggle = (year) => {
        setExpandedYear(expandedYear === year ? null : year);
    };


  return (
      <section className="min-h-[70vh] relative bg-whites-500 flex flex-col items-center justify-center gap-9 py-[70px] px-4 md:px-6 lg:px-12 lg:flex-row lg:h-full lg:items-start md:py-[70px] ">

          <div className="flex flex-col xl:flex-row gap-[20px]">
              {/* Archives Grid */}
              <div className="md:max-w-[750px] w-full flex flex-col justify-center lg:min-w-[200px] select-none lg:gap-[10px]">
                  {/* Title Section */}
                  <h2 className="text-xl font-[Inter-SemiBold] mb-4 text-left sm:text-left py-[10px] px-[12px]">Archives</h2>

                  <div className="grid grid-cols-1 md:grid-cols-4 min-h-[167px]  xl:flex xl:flex-col gap-4">
                      {
                          allCollectedYears.length > 0 && <>
                              {allCollectedYears.map(({ year, months }) => (
                                  <div key={year} className={`col-span-${expandedYear === year ? 2 : 1} sm:col-span-${expandedYear === year ? 3 : 1} lg:col-span-${expandedYear === year ? 4 : 1}`}>
                                      <div
                                          className="flex items-center justify-start cursor-pointer"
                                          onClick={() => handleToggle(year)}
                                      >
                                          <span className="flex items-center justify-center  text-[#141118] w-6 h-6  rounded-md">
                                              {expandedYear === year ? <Icon
                                                  icon="mage:minus-square"

                                                  className="w-6 h-6 text-[#141118]"
                                              /> : <Icon
                                                      icon="mage:plus-square"

                                                      className="w-6 h-6 text-[#141118]"
                                              />}
                                          </span>
                                          <span className="font-[Inter-Medium] text-lg  ml-2">{year}</span>
                                      </div>
                                      {expandedYear === year && (
                                          <ul className="cursor-pointer mt-2 px-4 text-whites-800 gap-[5px] flex flex-col">
                                              {months.map((month, index) => (
                                                  <li key={index} onClick={() => navigate(`/internetarchive/collections?year=${year}&month=${month}`, {
                                                      state: {
                                                          month: month, year: year
                                                      }
                                                  })} className=" font-[Inter-Medium] text-base xl:ml-4 list-none">
                                                      {month} - {year}
                                                  </li>
                                              ))}
                                          </ul>
                                      )}
                                  </div>
                              ))}
                          </>
                      }
                     
                  </div>
              </div>

              {/* Categories Section */}
              <div className="md:max-w-[750px] w-full flex flex-col  justify-between items-start sm:items-start gap-2 sm:gap-2 mt-8 xl:flex-col xl:gap-4 xl:items-start xl:mt-0 lg:justify-start ">
                  {/* Title Section */}
                  <h2 className="text-xl  font-[Inter-SemiBold] md:mb-4 text-center sm:text-left lg:text-left py-[10px] px-[12px] xl:mb-0">Categories</h2>
                  {/* Column 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 xl:flex xl:flex-col gap-2 md:text-center sm:text-left xl:text-left w-max text-[#141118] font-[Inter-Medium]">

                      {
                          archivesCategories.map((data, index) => {
                              return <span onClick={() => navigate(`/internetarchive/collections?category=${data.title}`, {
                                  state: {
                                      category: data.title
                                  }
                              })} className="font-[Inter-Medium] text-lg py-[10px] px-[12px] cursor-pointer">{data.title}</span>
                          })
                      }
                     
                     
                  </div>




              </div>
          </div>
             
          
         
      </section>
  )
}

export default RightSection