import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MoviePage from "../../components/movie/MoviePage";

const index = () => {
  const { query } = useRouter();
  const { title = "", name = "", original_name = "", overview = "" } = query;
  return (
    <>
      <Head>
        <title>
          {title.toString() ||
            original_name.toString() ||
            name.toString() ||
            "Movie"}{" "}
          | Theatre
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={overview.toString()} />
      </Head>
      <main>
        <MoviePage />
      </main>
    </>
  );
};

export default index;
