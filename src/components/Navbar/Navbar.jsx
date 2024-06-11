import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: <HiHome />,
    },
    {
      name: "SEARCH",
      icon: <HiMagnifyingGlass />,
    },
    {
      name: "WATCH LIST",
      icon: <HiPlus />,
    },
    {
      name: "ORIGINALS",
      icon: <HiStar />,
    },
    {
      name: "MOVIES",
      icon: <HiPlayCircle />,
    },
    {
      name: "SERIES",
      icon: <HiTv />,
    },
  ];
  const Dropdown = () => {
    setOpen(!open);
  };
  return (
    <NavContainer>
      <LogoAndMenu>
        <Link to="/">
          <Logo src="/public/logoblue.png" alt="" />
        </Link>

        <MenuItems>
          {menu.map((item) => (
            <NavbarItem key={item.name} name={item.name} icon={item.icon} />
          ))}
        </MenuItems>
        <MobileMenuItems>
          {menu.map(
            (item, index) =>
              index < 3 && (
                <NavbarItem key={item.name} name={""} icon={item.icon} />
              )
          )}
          <DropdownContainer onClick={Dropdown}>
            <NavbarItem name={""} icon={<HiDotsVertical />} />
            {open && (
              <DropdownMenu>
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <NavbarItem
                        name={item.name}
                        key={item.name}
                        icon={item.icon}
                        isOpen={open}
                      />
                    )
                )}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </MobileMenuItems>
      </LogoAndMenu>
      <UserAvatar
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt=""
      />
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  height: 70px;
  background-color: #090b13;
`;

const LogoAndMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 640px) {
    gap: 16px;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }
`;



const Logo = styled.img`
  width: 80px;
  object-fit: contain;
`;

const MenuItems = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const MobileMenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background-color: #121212;
  border: 1px solid #4b5563;
  padding: 16px 20px;
  z-index: 10;
`;

const UserAvatar = styled.img`
  width: 40px;
  border-radius: 50%;
  object-fit: contain;
`;
