import React from "react";
import { HiOutlineCollection, HiOutlineHome } from "react-icons/hi";
import { BsLightning, BsSearch } from "react-icons/bs";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import SearchNav from "../../UI/Search/SearchNav";

const navData = [
  { title: "Home", Icon: HiOutlineHome, url: "/" },
  { title: "Trending", Icon: BsLightning, url: "/?genre=fetchTrending" },
  { title: "Search", Icon: BsSearch, url: '?search=""' },
];

const Header = () => {
  return (
    <header className="grid grid-cols-1 md:grid-cols-3 justify-between items-center p-5">
      <div className="col-span-1 invisible md:visible"></div>
      <div className="flex justify-evenly max-w-2xl mb-3 col-span-1 md:order-3">
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
        className="text-white font-bebas tracking-widest font-extrabold text-5xl col-span-1 text-center"
      >
        Theatre
      </Link>
    </header>
  );
};

export default Header;
