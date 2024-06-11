import React from "react";
import Carousel from "./Carousel/Carousel";
import styled from "styled-components";
import GenreMovieList from "./MovieList/GenreMovieList";
import ProductionHouse from "./Production/ProductionHouse";
import backgroundimg from "../assets/images/home-background.png"

function Home() {
  return (
    <Container>
      <Carousel />
      <ProductionHouse />
      <GenreMovieList />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(${backgroundimg}) center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
