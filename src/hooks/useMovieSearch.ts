import { useState } from "react";
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const API_URL = process.env.TMDB_API_URL;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const useMovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovies = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${API_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );
      setMovies(response.data.results);
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, searchMovies };
};

export default useMovieSearch;
