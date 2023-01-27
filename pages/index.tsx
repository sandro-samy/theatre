import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Movies from "../components/home/Movies";
import requests from "../utils/requests";

const Home = ({ movies }: { movies: IMovie[] }) => {
  console.log(movies);
  return (
    <>
      <Head>
        <title>Home | Sulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const genre: any = context?.query?.genre?.toString();
  try {
    const genreTofetch = Object.entries(requests).find(
      (req) => req[0] === genre
    ) || ["fetchTrending", requests.fetchTrending];
    const { data } = await axios(
      `https://api.themoviedb.org/3${genreTofetch[1]?.url}`
    );
    const movies = data.results;
    return {
      props: {
        movies: movies,
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
