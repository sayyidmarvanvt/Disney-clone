import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = import.meta.env.VITE_API_KEY;

const getTrendingVideos = () => axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) => axios.get(movieBaseUrl + "discover/movie?api_key=" + api_key + "&with_genres=" + id);
const getMovieDetailsById = (id) => axios.get(movieBaseUrl + "movie/" + id + "?api_key=" + api_key);


export default {
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetailsById
};





