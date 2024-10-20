import Banner_720 from "@/banners/banner_720";
import MovieContainer from "@/components/MovieContainer";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

interface Props {
  params: {
    term: string;
  };
}

const SearchPage = async ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center">
        <Banner_720 />
      </div>
      <h2 className="text-4xl font-bold px-10 mb-5">Results for {termToUse}</h2>
      <MovieContainer movies={movies} title="Searched Movies" isVertical />
      <MovieContainer movies={popularMovies} title="You may also like" />
      <div>
        <div id="container-5124eefbaa72ac6102cfa1f1d50092bc"></div>
      </div>
    </div>
  );
};

export default SearchPage;
