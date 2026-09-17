import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wmovieService from './wmovieService';

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    allFilmItems: {
        items: [],
        overall_total: 0,
    },
    singleWebFilm: {
        film: null,
    },
    singleWebEpisode: {
        film: null,
    },
    watchlists: {
        allLists: []
    },
};

export const getWebFilmData = createAsyncThunk(
    'films/web',
    async (data, thunkAPI) => {
        const getAttempt = await wmovieService.fetchWFilms();

        if (getAttempt.type === 'success') {
            //console.log("service")
            return getAttempt
        } else {
            return thunkAPI.rejectWithValue(getAttempt.message);
        }
    }
)

export const getSingleWebFilmData = createAsyncThunk(
    "films/web/single",
    async (data, thunkAPI) => {
        const getAttempt = await wmovieService.fetchsingleWFilms(data);

        if (getAttempt.type === "success") {
            return getAttempt;
        } else {
            return thunkAPI.rejectWithValue(getAttempt.message);
        }
    }
);

export const getSingleEpisodeFilmData = createAsyncThunk(
    "films/episode/single",
    async (data, thunkAPI) => {
        const getAttempt = await wmovieService.fetchsingleWEpisodes(data);

        if (getAttempt.type === "success") {
            return getAttempt;
        } else {
            return thunkAPI.rejectWithValue(getAttempt.message);
        }
    }
);

export const getwatchListData = createAsyncThunk(
    "films/watchlists",
    async (data, thunkAPI) => {
        const getAttempt = await wmovieService.fetchwatchlists(data);

        if (getAttempt.type === "success") {
            return getAttempt;
        } else {
            return thunkAPI.rejectWithValue(getAttempt.message);
        }
    }
);

export const wmovieSlice = createSlice({
    name: "wfilm",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWebFilmData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getWebFilmData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.allFilmItems = action.payload;
            })
            .addCase(getWebFilmData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            //single film
            .addCase(getSingleWebFilmData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleWebFilmData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleWebFilm = action.payload;
            })
            .addCase(getSingleWebFilmData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            //single episode
            .addCase(getSingleEpisodeFilmData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleEpisodeFilmData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleWebEpisode = action.payload;
            })
            .addCase(getSingleEpisodeFilmData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            //watchlists
            .addCase(getwatchListData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getwatchListData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.watchlists = action.payload;
            })
            .addCase(getwatchListData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            ;
    }
});

export const { reset } = wmovieSlice.actions;
export default wmovieSlice.reducer;

