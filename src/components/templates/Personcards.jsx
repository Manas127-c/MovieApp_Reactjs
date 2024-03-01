import React from 'react'
import Loader from '../Loader'
import { Link } from 'react-router-dom'

function Personcards({data,tit}) {
  return data ? (
    <div className='w-full h-full mt-5 flex flex-wrap lg:gap-12 gap-6 bg-[#1F1E24] lg:px-10 px-2'>
        {data.map((t,i)=>(<Link to={`/${t.media_type || 'person'}/details/${t.id}`} key={i} className='lg:w-[13vw] w-[44vw] '>
          <img className='w-full h-[40vh] object-cover shrink-0 rounded shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={t.backdrop_path || t.profile_path ? `https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path }` : `https://tse2.mm.bing.net/th?id=OIP.ZIa3xzj07l3T0PdN67z1iwHaHa&pid=Api&P=0&h=220`} alt="" />
          <h1 className='text-md font-semibold text-white mt-3'>{t.originl_title || t.name || t.title || t.original_name}</h1>
        </Link>))}
    </div>
  ):(<Loader/>)
}

export default Personcards