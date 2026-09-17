import axios from "axios";

//import { BASE_API_ } from "../../../../3-Middleware/base_url.config";
//import web
import filmJSON from '../../../../1-Assets/data/film_metadata.json'
let errorFunction = (error) => {
  let errorArray = [];
  errorArray.push(error);

  let responsedd = {
    message: "",
    type: "error",
  };
  if (errorArray.length !== 0 && errorArray[0].response) {
    responsedd.message = errorArray[0].response.data;
  } else if (errorArray.length !== 0 && !errorArray[0].response) {
    responsedd.message = errorArray[0].message;
  }

  return responsedd;
};

/** get all films */
const fetchWFilms = async () => {
  try {
  //  const value = await AsyncStorage.getItem("@storage_Key");

    const response = JSON.parse(filmJSON)
    //console.log("res", JSON.parse(response), filmJSON)

    let dataCollected = {
      type: "success",
      items: filmJSON,
      overrall_total: response.length
    };

    return dataCollected;
  } catch (error) {
    let errorResult = errorFunction(error);
    return errorResult;
  }
};

//look for a single film
const fetchsingleWFilms = async (details) => {
  try {
    //  const value = await AsyncStorage.getItem("@storage_Key");

    const response = await axios.get(`${BASE_API_}/api/film/sfilm/${details}`);

    let dataCollected = {
      type: "success",
      ...response.data,
    };

    return dataCollected;
  } catch (error) {
    let errorResult = errorFunction(error);
    return errorResult;
  }
};

/** single epsode */
const fetchsingleWEpisodes = async (details) => {
  try {
    //  const value = await AsyncStorage.getItem("@storage_Key");

    const response = await axios.get(
      `${BASE_API_}/api/film/sepisode/${details}`
    );

    let dataCollected = {
      type: "success",
      ...response.data,
    };

    return dataCollected;
  } catch (error) {
    let errorResult = errorFunction(error);
    return errorResult;
  }
};

/** get watch lists */
const fetchwatchlists = async (details) => {
  try {
    //  const value = await AsyncStorage.getItem("@storage_Key");

    const response = await axios.get(`${BASE_API_}/api/watchlist/all`);

    let dataCollected = {
      type: "success",
      ...response.data,
    };

    return dataCollected;
  } catch (error) {
    let errorResult = errorFunction(error);
    return errorResult;
  }
};


const wmovieService = {
  fetchWFilms,
  fetchsingleWFilms,
  fetchsingleWEpisodes,
  fetchwatchlists,
};

export default wmovieService;
