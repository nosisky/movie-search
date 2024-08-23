import React, { useState } from "react";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const { movies, loading, error, searchMovies } = useMovieSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies(query);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="flex mb-8">
        <input
          type="text"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-3 rounded-r-lg hover:bg-purple-600"
        >
          Search
        </button>
      </form>

      {loading && (
        <div
          data-testid="loading-indicator"
          className="text-center text-gray-500"
        >
          <Loader />
        </div>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-gray-500">No movies found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
