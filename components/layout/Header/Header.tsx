import React from "react";
import { HiOutlineCollection, HiOutlineHome } from "react-icons/hi";
import { BsLightning, BsSearch } from "react-icons/bs";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import SearchNav from "../../UI/Search/SearchNav";

const navData = [
  { title: "Home", Icon: HiOutlineHome, url: "/" },
  { title: "Trending", Icon: BsLightning, url: "/?genre=fetchTrending" },
  // { title: "Collection", Icon: HiOutlineCollection, url: "/collection" },
  { title: "Search", Icon: BsSearch, url: '?search=""' },
];

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5">
      <div className="flex flex-grow justify-evenly max-w-2xl mb-3">
        {navData.map(
          ({
            title,
            Icon,
            url,
          }: {
            title: string;
            Icon: React.ElementType;
            url: string;
          }) =>
            title !== "Search" ? (
              <Link href={url} key={title}>
                <HeaderItem key={title} title={title} Icon={Icon} />
              </Link>
            ) : (
              <SearchNav key={title} />
            )
        )}
      </div>
      <Link
        href={"/"}
        className="text-white font-bebas tracking-widest font-extrabold text-5xl"
      >
        Theatre
      </Link>
    </header>
  );
};

export default Header;
