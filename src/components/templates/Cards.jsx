import React from 'react'
import Loader from '../Loader'
import { Link } from 'react-router-dom'

function Cards({data,tit}) {
  console.log(tit)
  return data ? (
    <div className='w-full h-full mt-5 flex flex-wrap gap-2 bg-[#1F1E24] lg:px-10 px-2'>
        {data.map((t,i)=>(<Link to={`/${t.media_type || tit}/details/${t.id}`} key={i} className='lg:w-[23vw] w-[30vw]'>
          <img className='w-full h-[20vh] object-cover shrink-0 rounded' src={t.backdrop_path || t.profile_path ? `https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path }` : `https://tse2.mm.bing.net/th?id=OIP.ZIa3xzj07l3T0PdN67z1iwHaHa&pid=Api&P=0&h=220`} alt="" />
          <h1 className='lg:text-xl text-xs font-semibold text-white'>{t.originl_title || t.name || t.title || t.original_name}</h1>
        </Link>))}
    </div>
  ):(<Loader/>)
}

export default Cards