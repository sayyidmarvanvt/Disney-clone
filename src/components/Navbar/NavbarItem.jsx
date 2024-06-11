import React from "react";
import styled from "styled-components";

function NavbarItem({ icon, name, isOpen }) {
  return (
    <NavItemContainer>
      {icon}
      {isOpen ? <NavItemName>{name}</NavItemName> : <NavItemName>{name}</NavItemName>}
    </NavItemContainer>
  );
}

export default NavbarItem;

const NavItemContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }
  margin-bottom: 8px;
`;

const NavItemName = styled.h2`
font-size:12px;
  @media (max-width: 324px) {
    display: none;
  }
`;
