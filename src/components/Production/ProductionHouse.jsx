import React from "react";
import styled from "styled-components";
import disney from "../../assets/images/disney.png";
import marvel from "../../assets/images/marvel.png";
import nationalG from "../../assets/images/nationalG.png";
import pixar from "../../assets/images/pixar.png";
import starwar from "../../assets/images/starwar.png";

import starwarV from "../../assets/Videos/star-wars.mp4";
import disneyV from "../../assets/Videos/disney.mp4";
import marvelV from "../../assets/Videos/marvel.mp4";
import nationalGeographicV from "../../assets/Videos/national-geographic.mp4";
import pixarV from "../../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: starwar, video: starwarV },
    { id: 5, image: nationalG, video: nationalGeographicV },
  ];

  return (
    <Container>
      {productionHouseList.map((item) => (
        <ProductionHouseItem key={item.id}>
          <Video src={item.video} autoPlay loop playsInline muted />
          <Image src={item.image} />
        </ProductionHouseItem>
      ))}
    </Container>
  );
}

export default ProductionHouse;

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  @media (min-width: 768px) {
    gap: 20px;
    padding: 20px 60px;
  }
`;

const ProductionHouseItem = styled.div`
  position: relative;
  border: 2px solid gray;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.1);
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 10px;
  opacity: 0;
  z-index: 0;
  &:hover {
    opacity: 0.5;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  z-index: 1;
  opacity: 1;
`;
