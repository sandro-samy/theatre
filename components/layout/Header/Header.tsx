import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { HiOutlineCollection, HiOutlineHome } from "react-icons/hi";
import { BsLightning, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import HeaderItem from "./HeaderItem";

const navData = [
  { title: "Home", Icon: HiOutlineHome },
  { title: "Trending", Icon: BsLightning },
  { title: "Verfied", Icon: BiBadgeCheck },
  { title: "Collection", Icon: HiOutlineCollection },
  { title: "Search", Icon: BsSearch },
  { title: "Account", Icon: AiOutlineUser },
];

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5">
      <div className="flex flex-grow justify-evenly max-w-2xl mb-3">
        {navData.map(
          ({ title, Icon }: { title: string; Icon: React.ElementType }) => (
            <HeaderItem key={title} title={title} Icon={Icon} />
          )
        )}
      </div>
      <h2 className="text-white font-bebas tracking-widest font-extrabold text-5xl">
        Sulu
      </h2>
    </header>
  );
};

export default Header;
