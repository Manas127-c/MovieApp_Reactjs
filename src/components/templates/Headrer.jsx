import React from "react";
import { Link } from "react-router-dom";

function Headrer({ data }) {
  
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex justify-start items-end lg:p-7 p-2 overflow-hidden"
    >
      <div className="flex justify-start item-start lg:gap-3 gap-1 flex-col">
        <h1 className="lg:text-5xl text-xl font-semibold text-white">
          {data.originl_title || data.name || data.title || data.original_name}
        </h1>
        <div className="flex items-center justify-start lg:gap-3 lg:mt-2 gap-1">
          <h1 className="text-white font-semibold lg:text-xl text-xs">
            {data.release_date || "Not Availiable"}
          </h1>
          <h1 className=" text-white font-semibold lg:text-md text-xs px-2 py-1 rounded bg-white/20 backdrop-blur-sm">
            language : {data.original_language}
          </h1>
          <h1 className="text-white font-semibold px-2 py-1 lg:text-md text-xs rounded bg-white/20 backdrop-blur-sm">
            IMDB : {data.vote_average.toFixed(1)}
          </h1>
        </div>
        <p className="text-white lg:text-base text-xs lg:w-[30%] w-[100%] lg:line-clamp-3 line-clamp-5">{data.overview}</p>
        <Link to={`${data.media_type}/details/${data.id}/trailer`} className="text-md  px-4 py-2  w-32 flex items-center justify-center bg-[#6556CD] rounded text-white mt-4 font-semibold hover:bg-violet-500 duration-300">
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default Headrer;
