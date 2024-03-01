import axios from "axios";

const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGU0MGE0YTQzMTkwMDRlN2ZmZTkwYTVjM2QyOGQxYyIsInN1YiI6IjY1YzA3NjZkOWYzN2IwMDE3YzVkOTg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7mR9r2I3Uo6Ha2IAG_m9r4zIjYN5zYwawTkIsVKa4bE'
      }
})

export default instance;