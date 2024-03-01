import React, { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { infsasync, removemovie } from "../store/reducer/movieSlice";
import Loader from "./Loader";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Horizontalcards from "./templates/Horizontalcards";

function Moviedetails() {
  const navigate=useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infsasync(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  const { info } = useSelector((state) => state.movie);

  return info ? (
    <div
      className="w-screen h-screen flex flex-col relative overflow-hidden"
      style={{
        background: `linear-gradient(86deg, rgba(31,30,36,1) 0%, rgba(31,30,36,0.9) 49%, rgba(31,30,36,1) 100%),url(https://image.tmdb.org/t/p/original/${
          info.details.backdrop_path || info.details.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <i onClick={()=>navigate(-1)} className="absolute left-[5%] lg:left-[1%] top-[1%] lg:text-2xl text-md ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] cursor-pointer font-semibold z-20"></i>
      <div className="w-full min-h-[100vh] overflow-y-auto lg:mt-0 mt-5">
      <div className="w-[100vw] h-[70vh] relative">
      <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.7)] object-cover absolute rounded-md lg:w-[20vw] w-[90vw] lg:h-[60vh] h-[30vh] lg:left-[10%] left-[5%] top-[5%] "
          src={`https://image.tmdb.org/t/p/original/${
            info.details.backdrop_path || info.details.profile_path
          }`}
          alt=""
        />
        <div className=" absolute lg:w-[50vw] w-[90vw] lg:h-[60vh] h-[50vh] lg:left-[33%] left-[5%] lg:top-[5%] top-[50%] flex flex-col justify-center lg:items-start items-center py-5 lg:gap-6 gap-3">
          <h1 className="lg:text-4xl text-2xl font-bold text-white">
            {info.details.originl_title ||
              info.details.name ||
              info.details.title ||
              info.details.original_name}
            <span className="font-medium lg:text-2xl text-lg text-zinc-400 ml-2">({info.details.release_date.split("-")[0]})</span>
          </h1>
          <div className="flex lg:gap-2 gap-1 items-center justify-start text-white">
            <a
              target="_blank"
              href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
              className="hover:bg-white/30 lg:text-md text-xs text-white font-semibold px-2 py-1 rounded bg-white/20 backdrop-blur-sm"
            >
              IMDB : {info.details.vote_average.toFixed(1)}
            </a>
            <h1 className="text-white font-normal lg:text-lg text-xs">
              {info.details.release_date || "Not Availiable"}{" "}
              <span>({info.details.production_countries[0].iso_3166_1})</span>
            </h1>
            (
            {info.details.genres.map((e, i) => (
              <h1 key={i} className="text-white font-normal lg:text-lg text-xs">
                {e.name},
              </h1>
            ))}
            )
          </div>
          <div className="flex gap-2 items-center justify-start">
            <div style={{ width: 50, height: 50 }}>
              <CircularProgressbar
                value={(info.details.vote_average * 10).toFixed()}
                text={`${(info.details.vote_average * 10).toFixed()}%`}
              />
            </div>
            <h1 className="text-white font-normal">User Score</h1>
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              className="ml-2 text-white font-normal hover:text-[#6556cd] hover:font-semibold hover:text-lg duration-300"
            >
              <i className="ri-global-line"></i>
              <span>Wiki</span>
            </a>
            <a
              target="_blank"
              href={info.details.homepage}
              className="ml-2 text-white font-normal hover:text-[#6556cd] hover:font-semibold hover:text-lg duration-300"
            >
              <i className="ri-external-link-line"></i>
              <span>Official</span>
            </a>
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center gap-1">
            <h1 className="lg:text-xl text-lg font-bold text-white">Overview</h1>
            <p className="text-white lg:w-[80%] w-[90%] lg:line-clamp-4 line-clamp-3">
              {info.details.overview}
            </p>
          </div>
          {info.videos ? <Link to={`/movie/details/${info.details.id}/trailer`} className=" text-md px-4 py-2 w-32 flex items-center justify-center bg-[#6556CD] rounded text-white mt-4 font-semibold hover:bg-violet-500 duration-300">
            Watch Trailer
          </Link>:<h1 className="text-white text-xl font-semibold">Trailer Not Availiable</h1>}
          
        </div>
      </div>
      <div className="lg:w-[80vw] w-[100vw] h-[40vh] lg:mt-5 mt-24 mx-auto lg:p-5 p-1">
        <h1 className="ml-4 mb-4 text-zinc-400 text-xl font-semibold">More Like This</h1>
        {info.similar.length >0 ? <Horizontalcards data={info.similar} tit="movie" /> : <h1 className="ml-4 text-white text-xl font-semibold">NOT AVAILIABLE</h1> }
      </div>
      <div className="lg:w-[80vw] w-[100vw] h-[40vh] lg:mt-5 mt-2  mx-auto lg:p-5 p-1">
        <h1 className="ml-4 mb-4 text-zinc-400 text-xl font-semibold">More Recomendations</h1>
        {info.recomendations.length >0 ? <Horizontalcards data={info.recomendations} tit="movie" /> : <h1 className="ml-4 text-white text-xl font-semibold">NOT AVAILIABLE</h1> }
      </div>
      </div> 
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default Moviedetails;
