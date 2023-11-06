import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProduct = createAsyncThunk("products/fetchAllProducts", async (payload, thunkAPI) => {
    try {
        const res = await axios.get("/product/allProduct");
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchProductByUserId = createAsyncThunk("product/fetchProductByUserId", async (userId, thunkAPI) => {
    try {
        const res = await axios.get(`/product/search/${userId}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const createProduct = createAsyncThunk("products/createProducts", async ({ formData }, thunkAPI) => {
    try {
        const res = await axios.post("/product/create", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteProduct = createAsyncThunk("/product/deleteProduct", async (productId, thunkAPI) => {
    try {
        const res = await axios.delete(`/product/${productId}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchProductByCategory = createAsyncThunk(
    "products/fetchProductByCategorys",
    async (categoryId, thunkAPI) => {
        try {
            const res = await axios.get(`/product/category/${categoryId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

const inputProduct = {
    productName: "",
    productPrice: "",
    productImage: null,
    description: "",
    latitude: 11.11,
    longitude: 11.11,
    vehicleType: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYears: 0,
    homeProperty: "",
    homeType: "",
    bedroomQuantity: 0,
    bathroomQuantity: 0,
    homeAddress: "",
    categoryId: 0,
    typeOfCategory: "default",
};

const productSlice = createSlice({
    name: "product",
    initialState: {
        inputProduct,
        productData: null,
        productByUserId: null,
        productByCategory: null,
        deleteProduct: null,
        loading: false,
        error: "",
        success: false,
    },
    reducers: {
        logoutProduct: (state, { payload }) => {
            state.productData = null;
        },
        setInputProduct: (state, { payload }) => {
            state.inputProduct[payload.fieldName] = payload.fieldValue;
        },
        setInputProductCategory: (state, { payload }) => {
            state.inputProduct.categoryId = payload.id;
            state.inputProduct.typeOfCategory = payload.fieldValue;
        },
        setInputProductImage: (state, { payload }) => {
            state.inputProduct.productImage = payload.fieldValue;
        },
        resetInputProduct: (state, { payload }) => {
            state.inputProduct = inputProduct;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchAllProduct.fulfilled, (state, { payload }) => {
                state.productData = payload.allProduct;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchAllProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(fetchProductByUserId.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchProductByUserId.fulfilled, (state, { payload }) => {
                state.productByUserId = payload.product;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchProductByUserId.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(createProduct.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createProduct.fulfilled, (state, { payload }) => {
                state.productData = { ...state.productData, ...payload };
                state.loading = false;
                state.success = true;
            })
            .addCase(createProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(deleteProduct.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(deleteProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(fetchProductByCategory.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchProductByCategory.fulfilled, (state, { payload }) => {
                state.productByCategory = payload.product;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchProductByCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { logoutProduct, setInputProduct, setInputProductCategory, setInputProductImage, resetInputProduct } =
    productSlice.actions;

export default productSlice.reducer;
