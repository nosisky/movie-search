import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import MovieSearchPage from "../pages/MovieSearchPage";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("MovieSearchPage Integration Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the header, search input, and button correctly", () => {
    render(<MovieSearchPage />);

    expect(screen.getByText("Movie Explorer")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for a movie...")
    ).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("displays results when a successful search is made", async () => {
    const mockMovies = [
      {
        id: 1,
        title: "Inception",
        poster_path: "/inception.jpg",
        release_date: "2010-07-16",
        overview: "A mind-bending thriller by Christopher Nolan.",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { results: mockMovies } });

    render(<MovieSearchPage />);
    const searchInput = screen.getByPlaceholderText("Search for a movie...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Inception" } });
    fireEvent.click(searchButton);

    expect(screen.getByTestId("loading-indicator")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Inception")).toBeInTheDocument();
    });

    expect(screen.queryByTestId("loading-indicator")).not.toBeInTheDocument();

    expect(screen.getByText("2010-07-16")).toBeInTheDocument();
    expect(
      screen.getByText("A mind-bending thriller by Christopher Nolan.")
    ).toBeInTheDocument();
  });

  it("displays an error message when the API request fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

    render(<MovieSearchPage />);
    const searchInput = screen.getByPlaceholderText("Search for a movie...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "NonExistentMovie" } });
    fireEvent.click(searchButton);

    expect(screen.getByTestId("loading-indicator")).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText("Failed to fetch movies. Please try again later.")
      ).toBeInTheDocument();
    });

    expect(screen.queryByTestId("loading-indicator")).not.toBeInTheDocument();
  });

  it("displays a message if no movies are found", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { results: [] } });

    render(<MovieSearchPage />);
    const searchInput = screen.getByPlaceholderText("Search for a movie...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "UnknownMovie" } });
    fireEvent.click(searchButton);

    expect(screen.getByTestId("loading-indicator")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("No movies found.")).toBeInTheDocument();
    });

    expect(screen.queryByTestId("loading-indicator")).not.toBeInTheDocument();
  });

  it("displays a default image if no poster is available for the movie", async () => {
    const mockMovies = [
      {
        id: 1,
        title: "Inception",
        poster_path: null,
        release_date: "2010-07-16",
        overview: "A mind-bending thriller by Christopher Nolan.",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { results: mockMovies } });

    render(<MovieSearchPage />);
    const searchInput = screen.getByPlaceholderText("Search for a movie...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Inception" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText("Inception")).toBeInTheDocument();
    });

    const defaultImage = screen.getByAltText("Inception");
    expect(defaultImage).toHaveAttribute(
      "src",
      "https://via.placeholder.com/500x750?text=No+Image+Available"
    );
  });
});
