# Movie Search

### Movie Search is a React app to Search for movies using The Movie Database (TMDB) API

## Table of Contents

- [Movie Search](#movie-search)
    - [Movie Search is a React app to Search for movies using The Movie Database (TMDB) API](#movie-search-is-a-react-app-to-search-for-movies-using-the-movie-database-tmdb-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technology](#technology)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [API Reference](#api-reference)

## Features

- Search for movies using keywords
- View detailed information about each movie
- Responsive design for mobile and desktop

## Technology

**Movie Search** makes use of a host of modern technologies. The core ones are:

- **React**: This project makes use of the React JavaScript library to build the interface. React is used for building web pages that are structured as a collection of components. For more information, see [this link](https://reactjs.org/).
- **Tailwind CSS**: Tailwind CSS is an open-source CSS framework. It's a utility-first CSS framework for rapidly building custom user interfaces. Learn more about [Tailwind CSS](https://tailwindcss.com/).
- Axios: Axios is a promise-based HTTP client for the browser and Node.js. It's used in this project to make API requests to The Movie Database. More information can be found in the [Axios documentation](https://axios-http.com/).
- Tailwind CSS: Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML. Learn more about [Tailwind CSS](https://tailwindcss.com/).
- TypeScript: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, and modules to JavaScript, aiming to help you write more robust and maintainable code. Learn more about [Typescript](https://www.typescriptlang.org/).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- You have a Windows/Linux/Mac machine.
- You have read [The Movie Database API documentation](https://developers.themoviedb.org/3/getting-started/introduction).

## Installation

To install Movie Search, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/movie-search.git
   ```
2. Change into the project directory:
   ```
   cd movie-search
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

To use The Movie Database API, you need to obtain an API key:

1. Go to [TMDB API](https://www.themoviedb.org/settings/api) and request an API key.
2. Once you have your key, create a `.env` file in the root of your project.
3. Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:
   ```
   TMDB_API_KEY=YOUR_API_KEY
   TMDB_API_URL=https://api.themoviedb.org/3/search/movie
   ```

## Usage

To start the development server:

```
npm run start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run test:

```
npm run test
```

To create a production build:

```
npm run build
```

This builds the app for production to the `build` folder.

## API Reference

This project uses [The Movie Database API](https://developers.themoviedb.org/3). Refer to their documentation for more details on the available endpoints and response formats.


