import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../../config/axios";

export const registerUser = createAsyncThunk("auths/registerUsers", async (payload, thunkAPI) => {
    try {
        const res = await axios.post("/auth/register", payload);
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        paymentData: null,
        paymentLink: null,
        loading: false,
        error: "",
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.paymentLink = payload.user;
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export default paymentSlice.reducer;
