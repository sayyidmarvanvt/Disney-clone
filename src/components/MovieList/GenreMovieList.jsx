import React from "react";
import styled from "styled-components";
import GenresList from "../../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <Container>
      {GenresList.genere.map(
        (item, index) =>
          index <= 5 && (
            <GenreSection key={index}>
              <GenreTitle>{item.name}</GenreTitle>
              <MovieList genreId={item.id} index_={index} />
            </GenreSection>
          )
      )}
    </Container>
  );
}

export default GenreMovieList;

const Container = styled.div`
  padding-top: 24px;
  @media (min-width: 768px) {
    padding-top: 32px;
  }
`;

const GenreSection = styled.div`
  padding-top: 24px;
  @media (min-width: 768px) {
    padding-top: 32px;
  }
`;

const GenreTitle = styled.h2`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
