import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState={
    info:null
}

export const peopleSlice=createSlice({
    name:"people",
    initialState,
    reducers:{
        loadpeople:(state,action)=>{
            state.info= action.payload
        },
        removepeople:(state)=>{
            state.info=null
        }
      }
})

export default peopleSlice.reducer;//it get objects from user and provide data to store.jsx

export const { loadpeople,removepeople }=peopleSlice.actions;

export const infopsasync=(id)=>async(dispatch,getstate)=>{
    try {
        const details= await axios.get(`/person/${id}`)
        const externalid= await axios.get(`/person/${id}/external_ids`)
        const combined_credits= await axios.get(`/person/${id}/combined_credits`)
        const images= await axios.get(`/person/${id}/images`)
        const movie_credits=await axios.get(`/person/${id}/movie_credits`)
        const tv_credits=await axios.get(`/person/${id}/tv_credits`)
        const bulkdata={
            details: details.data,
            externalid: externalid.data,
            combined_credits: combined_credits.data,
            images: images.data,
            movie_credits: movie_credits.data,
            tv_credits: tv_credits.data,
        }
        dispatch(loadpeople(bulkdata))
    } catch (error) {
        console.log(error)
    }
}