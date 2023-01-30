import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Movies from "../components/home/Movies";
import Footer from "../components/layout/Footer/Footer";
import Pagination from "../components/UI/Pagination/Pagination";
import requests from "../utils/requests";

const Home = ({ movies, pages }: { movies: IMovie[]; pages: number }) => {
  const { query } = useRouter();
  const title =
    typeof query?.genre === "string" ? query.genre.replace("-", " ") : "Home";
  return (
    <>
      <Head>
        <title>{title} | Theatre</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A Movies and TV Series Website where you can find recommendations and ratings."
        />
      </Head>
      <main>
        <Movies movies={movies} />
        <Pagination
          pages={pages < 500 ? pages : 499}
          currentPage={Number(query?.page) || 1}
        />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const genre: any = context?.query?.genre?.toString();
  const page = context?.query?.page ? "&page=" + context?.query?.page : "";
  try {
    const genreTofetch = Object.entries(requests).find(
      (req) => req[0] === genre
    ) || ["fetchTrending", requests.Trending];

    const { data } = await axios(
      `https://api.themoviedb.org/3${genreTofetch[1]?.url}${page}`
    );

    const movies = data.results;
    const pages = data.total_pages;
    return {
      props: {
        movies,
        pages,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        movies: [],
      },
    };
  }
};
