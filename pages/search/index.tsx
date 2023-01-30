import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Movies from "../../components/home/Movies";
import Pagination from "../../components/UI/Pagination/Pagination";

const index = ({ movies, pages }: { movies: IMovie[]; pages: number }) => {
  const router = useRouter();
  const currentPage = Number(router?.query?.page) || 1;
  console.log(pages);
  return (
    <>
      <Head>
        <title>Search | Theatre</title>
        <meta
          name="description"
          content="Find your favourite movie or series."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Movies movies={movies} />
        <Pagination currentPage={currentPage} pages={pages} />
      </main>
    </>
  );
};

export default index;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const API_KEY = process.env.API_KEY;

  const page = context.query.page ? "&page=" + context.query.page : "";

  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${context.query.query}${page}`
  );
  const movies = data.results;
  const pages = data.total_pages;
  return {
    props: { movies, pages },
  };
};
