import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import MovieCard from "./MovieCard/MovieCard";
import HrMovieCard from "./MovieCard/HrMovieCard";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const handleImageClick = (id) => {
    navigate(`/details/${id.toString()}`);
  };

  const settings = {
    dots: false,
    speed: 1000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {movieList.map((item, index) => (
        <CardWrapper key={index}>
          {index_ % 3 === 0 ? (
            <HrMovieCard movie={item} />
          ) : (
            <MovieCard movie={item} />
          )}
        </CardWrapper>
      ))}
    </StyledSlider>
  );
}

export default MovieList;

const StyledSlider = styled(Slider)`
  .slick-prev button,
  .slick-next button {
    color: white;
    font-size: 24px;
    position: absolute;
    cursor: pointer;
    padding: 5px;
    transition: all 0.3s ease;
  }

  .slick-prev {
    z-index: 1;
    left: 15px;
  }

  .slick-next {
    right: 15px;
  }

  @media (max-width: 330px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;

const CardWrapper = styled.div`
  padding: 12px;
  scroll-smooth: auto;
`;
