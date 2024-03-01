import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function Trailer() {
    const w=window.innerWidth
    console.log(w)
    const navigate=useNavigate()
    const {pathname}=useLocation()
    const category=pathname.includes("movie") ? "movie":"tv"
    const ytvideo=useSelector(state=>state[category].info.videos)
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-screen h-screen z-10 bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
        <i onClick={()=>navigate(-1)} className="ri-close-fill text-zinc-400 absolute top-10 right-10 text-4xl font-bold cursor-pointer"></i>
        {w>700 ? <ReactPlayer controls width={900} height={450} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}></ReactPlayer>:<ReactPlayer controls width={400} height={200} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}></ReactPlayer>}
        
    </div>
  )
}

export default Trailer