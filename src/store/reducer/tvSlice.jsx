import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState={
    info:null
}

export const tvSlice=createSlice({
    name:"tv",
    initialState,
    reducers:{
        loadtv:(state,action)=>{
            state.info= action.payload
        },
        removtv:(state)=>{
            state.info=null
        }
      }
})

export default tvSlice.reducer;//it get objects from user and provide data to store.jsx

export const { loadtv,removtv }=tvSlice.actions;

export const infosasync=(id)=>async(dispatch,getstate)=>{
    try {
        const details= await axios.get(`/tv/${id}`)
        const externalid= await axios.get(`/tv/${id}/external_ids`)
        const recomendations= await axios.get(`/tv/${id}/recommendations`)
        const similar= await axios.get(`/tv/${id}/similar`)
        const videos= await axios.get(`/tv/${id}/videos`)
        const watchprovider=await axios.get(`/tv/${id}/watch/providers`)
        const episode_groups=await axios.get(`/tv/${id}/episode_groups`)
        const bulkdata={
            details: details.data,
            externalid: externalid.data,
            recomendations: recomendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m=>m.type==="Trailer"),
            watchprovider: watchprovider.data.results.IN,
            episode_groups: episode_groups.data,
        }
        dispatch(loadtv(bulkdata))
    } catch (error) {
        console.log(error)
    }
}