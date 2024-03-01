import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Horizontalcards({data,tit}) {
  return (
    <div className='w-full h-[32vh] px-3'>
        
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full flex gap-3  overflow-y-hidden"
      >
        {data.map((d,i)=>(<SwiperSlide key={i} className='lg:min-w-[10%] min-w-[30%] h-[30vh]  rounded overflow-hidden relative flex flex-col gap-2 p-1 bg-zinc-900 mb-3 hover:scale-105 duration-300 '>
        <Link to={`/${d.media_type || tit}/details/${d.id}`} className='w-full h-full'>
        <img src={d.backdrop_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}` : 'https://tse2.mm.bing.net/th?id=OIP.ZIa3xzj07l3T0PdN67z1iwHaHa&pid=Api&P=0&h=220'} alt="" className='w-full h-[40%] object-cover' />
                <h1 className=' text-white text-md '>{d.originl_title || d.name || d.title || d.original_name}</h1>
                <p className='text-white line-clamp-3 text-xs mt-2 font-thin'>{d.overview}</p>
        </Link>
        </SwiperSlide>))}
      </Swiper>
    </div>
  )
}

export default Horizontalcards