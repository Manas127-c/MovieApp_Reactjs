import React, { useEffect, useState } from 'react'
import Topnav from './templates/Topnav'
import Dropdown from './templates/Dropdown'
import axios from '../utils/axios'
import Cards from './templates/Cards'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader'

function Tv() {
  const navigate=useNavigate()
  const [category,setcategory]=useState("airing_today")
  const [tv,settv]=useState([])
  const [page,setpage]=useState(1)
  const [hasMore,sethasMore]=useState(true)
  document.title='MovieHub | Tv | ' + category
  const getdata=async()=>{
    try {
      const {data}=await axios.get(`/tv/${category}?page=${page}`)
      // settrending(data.results)
      if(data.results.length>0){
      settv((prev)=>[...prev,...data.results])
      setpage(page+1)
      }else{
        sethasMore(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const refresh=()=>{
    if(tv.length === 0){
      getdata()
    }else{
      setpage(1)
      settv([])
      getdata()
    }
  }
  useEffect(()=>{
    refresh()
  },[category])
  return tv.length>0 ? (
    <div className='w-screen h-screen relative'>
      <div className='w-full flex lg:px-10 px-2 lg:pt-5 pt-2'>
        <div className='flex items-center justify-start gap-3 lg:w-[10%] w-[30%]'>
        <i onClick={()=>navigate(-1)} className="lg:text-2xl text-md ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] cursor-pointer font-semibold"></i>
        <h1 className='lg:text-2xl text-md text-zinc-400 font-semibold'>Tv</h1>
        </div>
        <div className='w-[90%] flex  items-center lg:justify-between justify-end'>
          <div className='w-[90%] md:flex items-center justify-start hidden lg:block'>
          <Topnav/>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center gap-2'>
          <Dropdown title="Category" func={(e)=>setcategory(e.target.value)} opt={["airing_today","on_the_air","top_rated"]}/>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={getdata}
        hasMore={hasMore}
        loader={<h1 className='bg-[#1F1E24]'>Loading...</h1>}
      >
      <Cards data={tv} tit="tv"/>
      </InfiniteScroll>
      
    </div>
  ):(<Loader/>)
}

export default Tv