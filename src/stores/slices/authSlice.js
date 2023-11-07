import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAccessToken, removeAccessToken } from "../../utils/local-storage";
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

export const loginUser = createAsyncThunk("auths/loginUsers", async (payload, thunkAPI) => {
    try {
        const res = await axios.post("/auth/login", payload);
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchDataUser = createAsyncThunk("auths/dataUsers", async (payload, thunkAPI) => {
    try {
        const res = await axios.get("/auth/me");
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        authUserData: null,
        loading: false,
        error: "",
        success: false,
    },
    reducers: {
        logout: (state, { payload }) => {
            removeAccessToken();
            state.authUserData = null;
            state.loading = false;
            state.error = "";
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                addAccessToken(payload.accessToken);
                state.authUserData = payload.user;
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(loginUser.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                addAccessToken(payload.accessToken);
                state.authUserData = payload.user;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(fetchDataUser.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchDataUser.fulfilled, (state, { payload }) => {
                state.authUserData = payload.user;
                state.loading = false;
            })
            .addCase(fetchDataUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
