import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";



let api = 'http://localhost:3000/data'
let cart = 'http://localhost:3000/cart'


export const getData = createAsyncThunk(
    'api/getData',  
    async function () {
        try {
            const { data } = await axios.get(api)
            return data
        } catch (error) {
            console.log(error);o
        }

    }
)
export const getBuket = createAsyncThunk(
    'api/getBuket',
    async function () {
        try {
            const { data } = await axios.get(cart)
            return data
             
        } catch (error) {
            console.log(error);
        }

    }
)
export const getDataById = createAsyncThunk(
    'api/getDataById',
    async function (id) {
        try {
            const { data } = await axios.get(`${api}/${id}`)
            return data
        } catch (error) {
            console.log(error);
        }

    }
)
export const getDataByKey = createAsyncThunk(
    'api/getDataByKeys',
    async function (key) {
        try {
            const { data } = await axios.get(`${api}/${key}`)
            return data
        } catch (error) {
            console.log(error);
        }

    }
)

export const postBuket = createAsyncThunk(
    'api/postBuket',
    async function (obj, { dispatch }) {
        try {
            const { data } = await axios.post(cart, obj);
            dispatch(getBuket());
             toast.success('Successfully toasted!')
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);


export const SET_SELECTED_CATEGORY = 'api/setSelectedCategory'; 

export const setSelectedCategory = (category) => ({
    type: SET_SELECTED_CATEGORY, 
    payload: category,
  });




export const data = createSlice({
    name: 'api',
    initialState: {
        data: [],
        data1: [],
        cart:[],
        selectedCategory: null,
        productById:{},
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending,(state,action) =>{
            state.loading = true;
        });
        builder.addCase(getData.fulfilled,(state,action) =>{
            state.data = action.payload;
        });
        builder.addCase(getData.rejected,(state,action) =>{
            state.loading.false
        })
        builder.addCase(getDataById.pending,(state,action) =>{
            state.loading = true;
        });
        builder.addCase(getDataById.fulfilled,(state,action) =>{
            state.data1 = action.payload;
        });
        builder.addCase(getDataById.rejected,(state,action) =>{
            state.loading.false
        })
        builder.addCase(getBuket.pending,(state,action) =>{
            state.loading = true;
        });
        builder.addCase(getBuket.fulfilled,(state,action) =>{
            state.buket = action.payload;
        });
        builder.addCase(getBuket.rejected,(state,action) =>{
            state.loading.false
        })
        builder.addCase(SET_SELECTED_CATEGORY, (state, action) => {
            state.selectedCategory = action.payload;
        });

    }

})

export default data.reducer