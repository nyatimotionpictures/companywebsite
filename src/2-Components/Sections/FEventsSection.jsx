import React from "react";
import Buttons from "../Buttons/Buttons";
import EventsJson from '../../1-Assets/data/events.json'

import { BASE_URL_PROD } from "../../3-Middleware/base-url.config";
import { useNavigate } from "react-router-dom";


const FEventsSection = () => {
  const [AllEvents, setAllEventsData] = React.useState([])
  const [eventsData, setEventsData] = React.useState([])
  const [displayLength, setDisplayLength] = React.useState(4);

  let navigate = useNavigate()

  React.useEffect(() => {
    setDisplayLength(4)
    let ExtractedData = EventsJson.filter((data) => {
      if (data.ref_name === "Tuko Pamoja") {
        return data
      }
    })

  //  console.log("all", ExtractedData.length)
    setAllEventsData(() => ExtractedData)
    // console.log("ExtractedData", ExtractedData)
    let DisplayData = [...ExtractedData]
    DisplayData.splice(4);

   
    setEventsData(() => DisplayData)
  }, [EventsJson])
  

  //load more handler
  const handleMoreBtn = () => {
    let newDisplayLength = displayLength + 4;
   
    let newDisplayData = [...AllEvents];
    newDisplayData.splice(newDisplayLength);
    setDisplayLength(newDisplayLength)
    setEventsData(newDisplayData);
  }

  //load less handler
  const handleLessBtn = () => {
    
    let newDisplayLength = displayLength - 4;
    
    if (!(newDisplayLength < 4)) {
      let newDisplayData = [...AllEvents];
      newDisplayData.splice(newDisplayLength);
    
      setDisplayLength(newDisplayLength)
      setEventsData(newDisplayData);
    }
  
  }

  

  return (
    <section className="w-full bg-[#141118] py-4 md:py-16 overflow-hidden">
      {/* Title */}
     

      {/* Sub Title */}
      <h3 className="text-xl md:text-2xl text-left text-gray-400 mb-2 md:mb-8 px-0 md:px-0">
        Premiere & Screenings
      </h3>
      {/* Premiere and Screening Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-0 md:px-0">
       
        {
          eventsData.length > 0 ? (
            <>
              {eventsData.map((event, index) => (
                <div key={index} className="bg-transparent py-6 px-0 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    <span className="uppercase">{event.title} </span>- {event.date}
                  </h4>

                  <div className="flex flex-col gap-[20px] ">
                    <p className="text-gray-300">{event.description}</p>
                    <Buttons onClick={() => event.a_tag_type === "Internal" ? window.location.href = `${BASE_URL_PROD}${event.a_tag_link}${event._id}` : window.location.href = event.a_tag_link} className="text-primary-500 bg-transparent font-[Inter-SemiBold] text-[13.83px] max-w-max">See premiere photos and more...</Buttons>
                  </div>

                </div>
              ))}
            </>
          ): (
            <div className="italic text-[15px] md:text-[30px] text-white font-[Inter-Bold]"><h1>No Events Available</h1></div>
          )
        }

        
      </div>

      {/* Button */}
      {
        eventsData.length > 0 && AllEvents.length > 4  ? (
          <div className="flex flex-row items-center justify-center w-full gap-[30px] text-center mt-8">
            {
              AllEvents.length > displayLength  && AllEvents.length !== eventsData.length   &&  (<button onClick={handleMoreBtn} className="bg-primary-500 text-white py-2 px-6 rounded-full hover:bg-primary-400 transition duration-300 max-w-max">

                Load More Events
              </button>) 
            }
            
             {
                AllEvents.length === eventsData.length || eventsData.length > 4 ? (
                (<button onClick={handleLessBtn} className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-primary-400 transition duration-300 max-w-max">

                  Load Less Events
                </button>)
              ) : null
            }
          
          </div>
        ) : null
      }
   
    </section>
  );
};

export default FEventsSection;
