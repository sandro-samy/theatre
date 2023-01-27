import Image from "next/image";
import React, {
  ClassAttributes,
  ForwardedRef,
  forwardRef,
  LegacyRef,
} from "react";
import { FaRegThumbsUp } from "react-icons/fa";

const Thumbnail = forwardRef(
  (
    { movie }: { movie: IMovie },
    ref: React.LegacyRef<HTMLDivElement> | undefined
  ) => {
    const baseURL = "https://image.tmdb.org/t/p/original/";
    return (
      <div
        className="p-2 group cursor-pointer duration-300 ease-in transition-transform sm:hover:scale-105 hover:z-10 3xl:max-w-sm "
        ref={ref}
      >
        <Image
          height={1080}
          width={1920}
          src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.original_name}
        />
        <div className="p-2">
          <p className="truncate max-w-md mb-1">{movie.overview}</p>
          <h2 className="text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {movie.title || movie.original_name}
          </h2>
          <p className="flex items-center opacity-100 sm:opacity-0  sm:group-hover:opacity-100 ">
            {movie.media_type && `${movie.media_type} .`}{" "}
            {movie.release_data || movie.first_air_date} .{" "}
            <FaRegThumbsUp className="h-5 mx-2" /> {movie.vote_count}
          </p>
        </div>
      </div>
    );
  }
);

export default Thumbnail;
