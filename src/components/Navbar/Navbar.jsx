import React, { useState } from "react";
import logo from "../logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import NavbarItem from "./NavbarItem";
import {Link} from "react-router-dom"
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
    <div className=" flex items-center justify-between p-5 h-[70px] bg-[#090b13] ">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-8 ">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-20 object-contain" />
        </Link>

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <NavbarItem key={item.name} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div className="flex  md:gap-8 items-center gap-6 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <NavbarItem key={item.name} name={""} icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={Dropdown}>
            <NavbarItem name={""} icon={<HiDotsVertical />} />
            {open ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700  px-5 py-4 z-10">
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
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt=""
        className="w-[40px] rounded-full object-contain"
      />
    </div>
  );
}

export default Navbar;
