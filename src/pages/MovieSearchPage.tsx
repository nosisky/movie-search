import React from "react";
import MovieSearch from "../components/MovieSearch";
import Header from "../components/Header";

const MovieSearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Movie Explorer" />

      <main className="py-8">
        <MovieSearch />
      </main>
    </div>
  );
};

export default MovieSearchPage;
