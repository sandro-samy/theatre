import React from "react";
import Thumbnail from "../UI/Thumbnail/Thumbnail";
import FlipMove from "react-flip-move";
const Movies = ({ movies }: { movies: IMovie[] }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
};

export default Movies;
