import { useRouter } from "next/router";
import React from "react";
import MoviePage from "../../components/movie/MoviePage";

const index = () => {
  const { query } = useRouter();
  return (
    <>
      <MoviePage />
    </>
  );
};

export default index;
