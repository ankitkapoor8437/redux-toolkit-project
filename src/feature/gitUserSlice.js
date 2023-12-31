import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const intialState = {}

// getUser Action
export const getAllData = createAsyncThunk("gitUsers", async (args, { rejectWithValue }) => {
    try {
        const response = await fetch("https://api.github.com/users");
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const gitUser = createSlice({
    name: "Git User",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true;
        },
        [getAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAllData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

})

export default gitUser.reducer;