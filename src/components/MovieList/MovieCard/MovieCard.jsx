import React from "react";
import { useNavigate } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  const navigate=useNavigate()
  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        onClick={()=>handleImageClick(movie.id)}
        className=" rounded-lg mt-2 hover:border-[2px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in "
      />
    </>
  );
}

export default MovieCard;
