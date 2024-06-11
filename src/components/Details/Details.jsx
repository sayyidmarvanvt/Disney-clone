import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalApi from "../../Services/GlobalApi";
import { useParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Details = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails();
  }, [id]); // Add id to the dependency array

  const getMovieDetails = async () => {
    try {
      const res = await GlobalApi.getMovieDetailsById(id.toString());
      console.log(res);
      setDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePlayButton = (id) => {
    console.log(id);
    window.location.href = id;
  };

  if (!detail) return <>Loading...</>;

  return (
    <Container>
      <Background>
        <img src={IMAGE_BASE_URL + detail.backdrop_path} alt={detail.title} />
      </Background>
      <ImageTitle>
        <img src={IMAGE_BASE_URL + detail.poster_path} alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton onClick={() => handlePlayButton(detail.homepage)}>
          <img src="\src\assets\images\play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="\src\assets\images\play-icon-white.png" alt="" />

          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="\src\assets\images\group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        <li>{detail.runtime} min</li>
        <li>{detail.release_date}</li>
        <li>
          {detail.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < detail.genres.length - 1 ? " , " : ""}
            </span>
          ))}
        </li>
      </SubTitle>
      <Description>{detail.overview}</Description>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  margin: 20px 0;
  height: 40vh;
  width: 45vh;

  img {
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: white;
  color: black;
  border: none;
  padding: 0 24px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  margin-top: 20px;
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 16px;
  margin-top: 10px;
  color: rgb(249, 249, 249);
`;
