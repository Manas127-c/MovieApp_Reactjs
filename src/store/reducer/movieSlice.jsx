import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState={
    info:null
}

export const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        loadmovie:(state,action)=>{
            state.info=action.payload
        },
        removemovie:(state)=>{
            state.info=null
        }
    }
})
export default movieSlice.reducer
export const {loadmovie,removemovie}=movieSlice.actions
export const infsasync=(id)=>async(dispatch,getstate)=>{
    try {
        const details= await axios.get(`/movie/${id}`)
        const externalid= await axios.get(`/movie/${id}/external_ids`)
        const recomendations= await axios.get(`/movie/${id}/recommendations`)
        const similar= await axios.get(`/movie/${id}/similar`)
        const videos= await axios.get(`/movie/${id}/videos`)
        const watchprovider=await axios.get(`/movie/${id}/watch/providers`)
        const credits=await axios.get(`/movie/${id}/credits`)
        const bulkdata={
            details: details.data,
            externalid: externalid.data,
            recomendations: recomendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m=>m.type==="Trailer"),
            watchprovider: watchprovider.data.results.IN,
            credits: credits.data,
        }
        dispatch(loadmovie(bulkdata))
    } catch (error) {
        console.log(error)
    }
}