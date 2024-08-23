import React from "react";
import { Movie } from "../hooks/useMovieSearch";

const DEFAULT_IMAGE_URL =
  "https://via.placeholder.com/500x750?text=No+Image+Available";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : DEFAULT_IMAGE_URL;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 truncate">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
        <p className="text-sm mt-2 text-gray-800 truncate">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
