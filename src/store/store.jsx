import { configureStore } from '@reduxjs/toolkit'
import  Moviereducer  from "./reducer/movieSlice";
import  Tvreducer  from "./reducer/tvSlice";
import  Peoplereducer from "./reducer/peopleSlice";
export default configureStore({
  reducer: {
    movie:Moviereducer,
    tv:Tvreducer,
    people:Peoplereducer,
  },
})