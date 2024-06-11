import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Card onClick={() => handleImageClick(movie.id)}>
      <Image
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt=""
      />
    </Card>
  );
}

export default HrMovieCard;

const Card = styled.div`
  margin-top: 12px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    border: 1px solid #ccc;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
