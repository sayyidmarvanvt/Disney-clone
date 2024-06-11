import React from "react";
import { useNavigate } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const navigate = useNavigate();
  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        onClick={() => handleImageClick(movie.id)}
        className=" rounded-lg hover:border-[1px] hover:scale-110 transition-all duration-350 ease-in border-gray-400 cursor-pointer"
      />
    </>
  );
}

export default HrMovieCard;
