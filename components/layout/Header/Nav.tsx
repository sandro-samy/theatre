import { useRouter } from "next/router";
import React from "react";
import requests from "../../../utils/requests";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
const Nav = () => {
  const requestsArr = Object.entries(requests);
  const router = useRouter();
  return (
    <nav className="relative mb-5 flex items-center">
      <div className="absolute top-0  bottom-0 left-0 bg-gradient-to-r from-[#0c2037] h-10 w-1/12 md:w-1/12 lg:invisible z-10 flex items-center  ">
        <BsChevronLeft className="lg:invisible text-2xl" />
      </div>
      <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-[#0c2037] h-10 w-2/12  md:w-1/12 z-10 flex justify-end items-center">
        <BsChevronRight className="lg:invisible text-2xl" />
      </div>
      <div className="flex px-10 sm:px-20 md:text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide h-10">
        {requestsArr.map(([key, { title, url }]) => (
          <button
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            key={key}
            className={`last:pr-24 cursor-pointer transition duration-100 transform  hover:text-white active:text-red-500 ${
              router?.query?.genre === key
                ? "scale-125 text-white"
                : "scale-100 hover:scale-110"
            }`}
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
