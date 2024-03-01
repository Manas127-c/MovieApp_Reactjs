import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { infopsasync, removepeople } from "../store/reducer/peopleSlice";
import Loader from "./Loader";
import Horizontalcards from "./templates/Horizontalcards";

function Peopledetails() {
  var date = new Date();
  var today = date.getFullYear();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infopsasync(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  const { info } = useSelector((state) => state.people);
  console.log(info);

  return info ? (
    <div className="w-screen min-h-screen overflow-y-auto">
      <div className="w-[85%] h-[100vh] mx-auto flex lg:flex-row flex-col ">
        <div className="lg:w-[25%] p-3 w-[90vw]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-[95%] h-[55vh] object-cover rounded-md mt-8"
            src={
              info.details.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    info.details.backdrop_path || info.details.profile_path
                  }`
                : `https://tse2.mm.bing.net/th?id=OIP.ZIa3xzj07l3T0PdN67z1iwHaHa&pid=Api&P=0&h=220`
            }
            alt=""
          />

          <div className="lg:w-[95%] flex gap-6 text-white text-2xl mt-10 w-[100%]">
            {info.details.facebook_id && <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i
              title="facebook-id"
              className="cursor-pointer hover:text-[#6556CD] ri-facebook-circle-fill"
            ></i></a>}
            {info.externalid.twitter_id && <a target="_blank" href={`https://twitter.com/${info.externalid.twitter_id}`}><i
              title="twitter-x-id"
              class="cursor-pointer hover:text-[#6556CD] ri-twitter-x-fill"
            ></i></a>}
            {info.externalid.instagram_id && <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i
              title="instagram-id"
              class="cursor-pointer hover:text-[#6556CD] ri-instagram-line"
            ></i></a>}
            {info.details.homepage && <a target="_blank" href={`${info.details.homepage}`}><i
              title="official-site"
              class="cursor-pointer hover:text-[#6556CD] ri-links-fill"
            ></i></a>}
          </div>

          <h1 className="text-2xl text-white font-semibold mt-8">
            Personal Info
          </h1>

          <h1 className="text-md text-white mt-5 font-semibold">Known For</h1>
          <h1 className="text-md text-white/70  font-light">
            {info.details.known_for_department}
          </h1>

          <h1 className="text-md text-white mt-5 font-semibold">
            Known Credits
          </h1>
          <h1 className="text-md text-white/70  font-light">
            {info.combined_credits.cast.length}
          </h1>

          <h1 className="text-md text-white mt-5 font-semibold">Gender</h1>
          <h1 className="text-md text-white/70  font-light">
            {info.details.gender === 1 ? "Female" : "Male"}
          </h1>

          <h1 className="text-md text-white mt-5 font-semibold">Birth Date</h1>
          <h1 className="text-md text-white/70  font-light">
            {info.details.birthday} (
            {`${today - info.details.birthday.split("-")[0]} years old`}){" "}
          </h1>

          <h1 className="text-md text-white mt-5 font-semibold">
            Place Of Birth
          </h1>
          <h1 className="text-md text-white/70  font-light">
            {info.details.place_of_birth}
          </h1>
        </div>
        <div className="lg:w-[75%] px-3 w-[90vw]">
          <h1 className="text-4xl text-yellow-600 font-semibold mt-12">
            {info.details.name}
          </h1>
          <h1 className="text-xl text-white font-medium mt-8">Biography</h1>
          <p className="text-white/70 mt-2 font-light">
            {info.details.biography}
          </p>
          <h1 className="text-xl text-white font-medium mt-8 mb-4">Known For</h1>
          <Horizontalcards
            data={info.combined_credits.cast}
            tit={info.combined_credits.cast.media_type}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Peopledetails;
