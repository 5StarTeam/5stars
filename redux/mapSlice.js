import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name: 'map',
    initialState: {
        markersForABird: [],
        allMarkers: [],
        directionToMarker: null,
        error: false,
    },
    reducers: {
        test(state, action) {
            const test = action.payload;
            state.error = true;
        },
    },
    extraReducers: builder => {

    }
});

export const { test } = mapSlice.actions;

export default mapSlice.reducer;
