import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalApi from "../../Services/GlobalApi";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Carousel() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = async () => {
    try {
      const res = await GlobalApi.getTrendingVideos();
      console.log(res);
      setMovieList(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
  };

  return (
    <StyledSlider {...settings}>
      {movieList.map((item, index) => (
        <div key={index} onClick={() => handleImageClick(item.id)}>
          <StyledImage
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title}
          />
        </div>
      ))}
    </StyledSlider>
  );
}

export default Carousel;

const StyledSlider = styled(Slider)`

margin-top:10px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
    display: block;
  }
  @media (max-width: 330px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;
const StyledImage = styled.img`
  height: 60vh;
  width: 100%;
  border-radius: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-color: transparent;
  object-fit: cover;
  object-position: top;
  transition: all 0.3s ease-in-out;
  scroll-behavior: smooth;

  &:hover {
    border-color: #f8fafc;
    border-width: 2px;
  }
`;
