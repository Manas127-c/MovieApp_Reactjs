import React from 'react'
import { Link } from 'react-router-dom'

function Responsivenav({click,setclick}) {
  return (
    <div className={`absolute bg-white/10 backdrop-blur-md left-0 bottom-0 ${click ? 'h-full':'h-[0%]'} duration-300 w-full z-50 flex flex-col items-center justify-center ${click ? 'opacity-100':'opacity-0'} ${click ? 'scale-1':' scale-0'}`}>
        <h1 className='text-2xl text-white font-bold mb-3'><i className=" text-[#6556CD] ri-movie-2-fill mr-2"></i>MovieHub</h1>
        <nav className='flex flex-col text-zinc-200 gap-3 mb-5'>
        <Link to='/trending'className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-fire-fill mr-2"></i>Trending</Link>
        <Link to='/popular'className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-sparkling-2-fill mr-2"></i>Popular</Link>
        <Link to='/movie' className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-movie-fill mr-2"></i>Movie</Link>
        <Link to='/tv' className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-tv-fill mr-2"></i>TV Shows</Link>
        <Link to='/person'className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-team-fill mr-2"></i>People</Link>
        <Link className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-information-fill mr-2"></i>About</Link>
        <Link className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-phone-fill mr-2"></i>Contact Us</Link>
    </nav>
        <i onClick={()=>setclick((p)=>!p)}className="ri-close-circle-line text-xl text-white"></i>
    </div>
  )
}

export default Responsivenav