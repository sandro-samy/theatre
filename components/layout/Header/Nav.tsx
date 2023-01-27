import { useRouter } from "next/router";
import React from "react";
import requests from "../../../utils/requests";

const Nav = () => {
  const requestsArr = Object.entries(requests);
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202a] h-10 w-1/12" />
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {requestsArr.map(([key, { title, url }]) => (
          <button
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-500"
          >
            {title}
          </button>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
