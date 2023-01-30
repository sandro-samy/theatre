import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Stars from "../UI/Stars/Stars";

const MoviePage = () => {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const { query } = useRouter();
  const {
    adult = false,
    backdrop_path = "",
    first_air_date = "",
    title = "",
    release_date = "",
    media_type = "",
    name = "",
    origin_country = [],
    original_language = "",
    original_name = "",
    overview = "",
    popularity = 0,
    poster_path = "",
    vote_average = 0,
    vote_count = 0,
  } = query;

  console.log(origin_country);
  return (
    <section className="flex flex-col max-w-6xl mx-auto">
      {
        <h1 className="px-0 no-underline pb-2 text-4xl text-white text-center mb-5">
          {title || name || original_name}
        </h1>
      }
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {backdrop_path || poster_path ? (
          <Image
            className="h-50 w-screen md:w-auto max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover shadow-md mb-5 md:mb-0"
            src={`${baseURL}${backdrop_path || poster_path}`}
            alt={
              (typeof title === "string" && title) ||
              (typeof original_name === "string" && original_name) ||
              ""
            }
            height={1080}
            width={1920}
            blurDataURL={`${baseURL}${backdrop_path || poster_path}`}
            placeholder="blur"
          />
        ) : null}

        <div className="px-10 flex flex-col">
          {/* <h1 className="px-0 no-underline pb-2 text-3xl text-white ">
            {title || original_name}
          </h1> */}
          {release_date.length > 0 ? (
            <p className="font-bold mb-1 capitalize">Release date: {release_date}</p>
          ) : null}
          {Array.isArray(origin_country) && origin_country.length > 0 ? (
            <p className="font-bold mb-1 capitalize ">
              country: {origin_country.join(", ")}
            </p>
          ) : null}
          <p className="mb-1 capitalize">language: {original_language}</p>
          <p className="mb-1 capitalize">
            Category: {adult === "true"  ? "+18" : "All Ages"}
          </p>
          <p className="mb-1 capitalize">type: {media_type} </p>
          <div className="mb-1 capitalize flex gap-2">
            <p>
              rate: {Number(vote_average).toFixed(2)} ({vote_count}){" "}
            </p>
            <Stars rating={Number(vote_average)} length={10} />
          </div>
          {typeof popularity === "string" ? (
            <p className="mb-1 capitalize">popularity: {Number(popularity).toFixed(0)}</p>
          ) : null}
          <p className="mb-1 ">Overview: {overview}</p>
        </div>
      </section>
    </section>
  );
};

export default MoviePage;
