import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import geoApi from "../../api/gepApi";
import pyApi from "../../api/pyApi";





export const get_constituency = createAsyncThunk(
    'geo/get_constituency',
    async(payload,{rejectWithValue,fulfillWithValue}) => {              
        
        try {
           const {data} = await geoApi.get(`/const`,{params: payload,withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_assembly = createAsyncThunk(
    'geo/get_assembly',
    async(payload,{rejectWithValue,fulfillWithValue}) => {              
        
        try {
           const {data} = await geoApi.get(`/assembly`,{params: payload,withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_loksabha_elective = createAsyncThunk(
    'minister/get_loksabha_elective',
    async(payload,{rejectWithValue,fulfillWithValue}) => {              
        
        try {
           const {data} = await geoApi.get(`/lok`,{params: payload,withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_headlines = createAsyncThunk(
    'minister/get_headlines',
    async(payload,{rejectWithValue,fulfillWithValue}) => {              
        
        try {
           const {data} = await geoApi.post(`/articles`,payload)
           console.log(data);
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)




export const geoReducer = createSlice({
    name: 'geo',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        constituency: [],
        assembly: [],
        lok_minister: [],
        coordinates: {},
        articles: [],
    },
    reducers : {
        // eslint-disable-next-line no-unused-vars
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        },
        setCoordinates: (state, action) => {
            console.log('set coordinates reached')
            state.coordinates = action.payload;
        }

    },
    extraReducers:(builder) => {
        builder
        
         .addCase(get_constituency.fulfilled, (state,{payload})=>{
            state.constituency = payload.constituency;
            state.loader = false;
         })
         .addCase(get_constituency.rejected, (state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.errorMessage;
         })
         .addCase(get_constituency.pending, (state)=>{
            state.loader = true;
         })
         .addCase(get_assembly.fulfilled, (state,{payload})=>{
            state.assembly = payload.assembly;
            state.loader = false;
         })
         .addCase(get_assembly.rejected, (state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.errorMessage;
         })
         .addCase(get_assembly.pending, (state)=>{
            state.loader = true;
         })
         .addCase(get_loksabha_elective.fulfilled, (state,{payload})=>{
            state.lok_minister = payload.LokSabhaMinister;
            state.loader = false;
         })
         .addCase(get_headlines.fulfilled, (state,{payload})=>{
            state.articles = payload.data;
         })
         .addCase(get_loksabha_elective.rejected, (state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.errorMessage;
         })
         .addCase(get_loksabha_elective.pending, (state)=>{
            state.loader = true;
         })
    }
})
export const {messageClear,setCoordinates} = geoReducer.actions
export default geoReducer.reducer