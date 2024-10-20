import MovieContainer from "@/components/MovieContainer";
import VideoPlayer from "@/components/VideoPlayer";
import { getImagePath } from "@/lib/getImagePath";
import Banner_720 from "@/banners/banner_720";

import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies,
} from "@/lib/getMovies";
import Image from "next/image";
import React from "react";
import Script from "next/script";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: Props){

  const details: any = await getMovieDetails(id);
  return {
    title: details?.title,
    description: details?.overview,
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": getImagePath(details?.backdrop_path),
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": getImagePath(details?.backdrop_path),
      "og:type": "website",
    }
    }
}



const MovieDetails = async ({ params: { id } }: Props) => {
  const movies = await getMovieVideos(id);
  const videos = movies.map((movie: any) => ({
    id: movie.id,
    iso_639_1: movie.iso_639_1,
    iso_3166_1: movie.iso_3166_1,
    key: movie.key,
    name: movie.name,
    official: movie.official,
    published_at: movie.published_at,
    site: movie.site,
    size: movie.size,
    type: movie.type,
  }));
  const details: any = await getMovieDetails(id);
  const popoularMovies = await getPopularMovies();

  return (
    <div>
      <div className="px-10">
        <div className="flex items-center justify-center">
          <Banner_720 />
        </div>
        <div className="py-10 lg:py-16 px-4 lg:px-8  text-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Movie backdrop with play button */}
            <div className="relative w-full lg:w-2/3 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={getImagePath(details?.backdrop_path)}
                alt={details?.title}
                width={1920}
                height={1080}
                className="w-full h-[30vh] lg:h-[70vh] object-cover group-hover:scale-110 duration-500 transition-transform"
              />
              {/* Play button in the center */}
              <div className="absolute inset-0 flex justify-center items-center">
                <a href="https://affordspoonsgray.com/br2tqwh1b?key=6e18e772fe82e44d0f60f85385178228" className="bg-white bg-opacity-80 hover:bg-opacity-100 p-4 rounded-full shadow-lg transition duration-300">
                  <svg
                    className="w-12 h-12 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.4 5.27a.75.75 0 00-1.15.64v7.18a.75.75 0 001.15.64l6.6-3.59a.75.75 0 000-1.28l-6.6-3.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Movie details section */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-6">
              {/* Title and Tagline */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white">{details?.original_title}</h1>
              <p className="italic text-lg text-gray-400">{details?.tagline}</p>

              {/* Overview */}
              <p className="text-base lg:text-lg text-gray-200 mt-2 leading-relaxed">{details?.overview}</p>

              {/* Additional information */}
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">IMDB:</span> {details.vote_average} / 10
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Votes:</span> {details.vote_count}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Release Date:</span> {details.release_date}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Genres:</span>{" "}
                  {details?.genres.map((item: any) => (
                    <span key={item?.id} className="text-white font-medium mr-1">
                      {item?.name}
                    </span>
                  ))}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Status:</span>{" "}
                  <span className={`font-semibold ${details?.status === "Released" ? "text-green-500" : "text-red-500"}`}>
                    {details.status}
                  </span>
                </p>
              </div>

              {/* Buttons: Watch and Download */}
              <div className="flex gap-4 mt-6">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300">
                  <a href="https://affordspoonsgray.com/br2tqwh1b?key=6e18e772fe82e44d0f60f85385178228">
                    Watch
                  </a>
                </button>
                <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition duration-300">
                  <a href="https://affordspoonsgray.com/br2tqwh1b?key=6e18e772fe82e44d0f60f85385178228">
                    Download
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Footer section: additional movie details */}
          <div className="mt-12">
            <div className="text-sm text-gray-400 flex flex-col gap-2">
              <p>
                <span className="font-semibold text-white">Production Companies:</span>{" "}
                {details?.production_companies.map((company: any) => (
                  <span key={company.id} className="mr-2">
                    {company.name}
                  </span>
                ))}
              </p>
              <p>
                <span className="font-semibold text-white">Runtime:</span> {details.runtime} min
              </p>
              <p>
                <span className="font-semibold text-white">Languages:</span>{" "}
                {details?.spoken_languages.map((lang: any) => (
                  <span key={lang.iso_639_1} className="mr-2">
                    {lang.english_name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div id="container-5124eefbaa72ac6102cfa1f1d50092bc"></div>
        </div>
        <VideoPlayer videos={videos} />
      </div>
      <div className="mt-6">
        <MovieContainer
          movies={popoularMovies}
          title="Popular Movies"
          isVertical
        />
      </div>
    </div>
  );
};

export default MovieDetails;
