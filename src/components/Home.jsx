import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import Headrer from './templates/Headrer'
import axios from '../utils/axios'
import Horizontalcards from './templates/Horizontalcards'
import Dropdown from './templates/Dropdown'
import Loader from './Loader'
import Responsivenav from './templates/Responsivenav'

function Home() {
  document.title='MovieHub | Homepage'
  const [wallpaper,setwallpaper]=useState(null)
  const [trending,settrending]=useState(null)
  const [category,setcategory]=useState("all")
  const [click,setclick]=useState(false)
  const getwallpaper=async()=>{
    try {
      const {data}=await axios.get(`/trending/all/day`)
      let one=data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(one)
    } catch (error) {
      console.log(error)
    }
  }
  const gettrending=async()=>{
    try {
      const {data}=await axios.get(`/trending/${category}/day`)     
      settrending(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
     gettrending()
     !wallpaper && getwallpaper()
    
  },[category])
  return wallpaper && trending ?(
   <>
   <Sidenav />
   <Responsivenav click={click} setclick={setclick}/>
   <div className='lg:w-[80%] h-full w-[100%] '>
    <Topnav/>
    <i onClick={()=>setclick((p)=>!p)}className="ri-menu-line lg:none absolute text-white block text-xl left-5 top-5 lg:hidden"></i>
    <div className='w-full h-[90vh] overflow-auto overflow-x-hidden '>
    <Headrer data={wallpaper}/>
    <div className='my-4 px-3 flex justify-between'>
            <h1 className='lg:text-2xl text-xl text-zinc-400 font-semibold'>#Trendings</h1>
            <Dropdown title="Filter" func={(e)=>setcategory(e.target.value)} opt={["all","movie","tv"]}/>
    </div>
    <Horizontalcards data={trending} tit={category}/>
    </div> 
   </div>
   </>
  ):(<Loader/>)
}

export default Home