import Banner_720 from "@/banners/banner_720";
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

interface Props {
  searchParams: {
    title: string;
  };
}

const ViewMorePage = async ({ searchParams: { title } }: Props) => {
  let movies: any = null;

  if (title === "Now Playing") {
    movies = await getNowPlayingMovies();
  } else if (title === "Upcoming") {
    movies = await getUpcomingMovies();
  } else if (title === "Top Rated") {
    movies = await getTopRatedMovies();
  } else if (title === "Popular") {
    movies = await getPopularMovies();
  }

  return (
    <div className="py-10">
      <div className="flex items-center justify-center overflow-hidden">
        <Banner_720 />
      </div>
      <h2 className="text-4xl font-bold px-10 mb-5">Results of {title}</h2>
      <MovieContainer movies={movies} isVertical={true} />
      <div>
        <div id="container-5124eefbaa72ac6102cfa1f1d50092bc"></div>
      </div>
    </div>
  );
};

export default ViewMorePage;
