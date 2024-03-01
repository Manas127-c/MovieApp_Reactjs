import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

function Topnav() {
  const [query, setquery] = useState("");
  const [searchdata, setsearchdata] = useState([]);
  //get data to acios api
  const getdata = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${query}`
      );
      setsearchdata(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start pl-[20%]">
      
      <i className="ri-search-2-line lg:text-2xl text-xl text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="lg:w-[48%] w-[70%] outline-none lg:mx-5 mx-1 p-2 lg:text-xl text-lg rounded border-none bg-transparent  text-zinc-200"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill lg:text-2xl text-xl text-zinc-400 cursor-pointer"
        ></i>
      )}
      <div className="absolute lg:w-[40%] w-[60%] max-h-[50vh] lg:left-[23%] left-[25%]  top-[85%] overflow-auto">
        {searchdata.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="w-100% lg:p-2 p-1 font-semibold lg:text-lg text-xs flex items-center gap-5 justify-start bg-white/10 backdrop-blur-md hover:bg-white/30 hover:font-bold duration-300"
          >
            <img
              className="w-[40%] lg:h-28 h-14 object-cover rounded shadow-md"
              src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : `https://tse2.mm.bing.net/th?id=OIP.ZIa3xzj07l3T0PdN67z1iwHaHa&pid=Api&P=0&h=220`}
              alt=""
            />
            <span>
              {s.originl_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
