import { configureStore } from "@reduxjs/toolkit";
import wmoviesReducer from './features/WebMovies/wmovieSlice'

//import loaderReducer from "./features/Loader/loaderSlice";
export const store = configureStore({
    reducer: {
        wfilm: wmoviesReducer,
       // loader: loaderReducer,

    },
});