import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <>
    <div className='w-[20%] h-ful border-r-[1px] border-zinc-200 p-5 hidden lg:block'>
    <h1 className='text-2xl text-white font-bold'><i className=" text-[#6556CD] ri-movie-2-fill mr-2"></i>MovieHub</h1>
    <nav className='flex flex-col text-zinc-400 gap-3 mb-5'>
        <h1 className='text-xl text-white font-semibold mt-10 mb-5'>New Feed</h1>
        <Link to='/trending'className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-fire-fill mr-2"></i>Trending</Link>
        <Link to='/popular'className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-sparkling-2-fill mr-2"></i>Popular</Link>
        <Link to='/movie' className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-movie-fill mr-2"></i>Movie</Link>
        <Link to='/tv' className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-tv-fill mr-2"></i>TV Shows</Link>
        <Link to='/person'className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-team-fill mr-2"></i>People</Link>
    </nav>
    <hr className='border-none h-[1px] bg-zinc-400'/>
    <nav className='flex flex-col text-zinc-400 gap-3'>
        <h1 className='text-xl text-white font-semibold mt-10 mb-5'>Website information</h1>
        <Link className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-information-fill mr-2"></i>About</Link>
        <Link className='hover:bg-[#6556CD] p-3 hover:text-white rounded-lg duration-300 transition-all'><i className="ri-phone-fill mr-2"></i>Contact Us</Link>
    </nav>
    </div>
    </>
  )
}

export default Sidenav