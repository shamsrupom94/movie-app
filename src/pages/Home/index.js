import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import MovieCard from "../../components/MovieCard";
import "../../App.css";

const API_URL = "http://www.omdbapi.com/?apikey=c9764e29&";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies("Harry");
  }, []);

  const fetchMovies = async (title) => {
    const { data } = await axios.get(`${API_URL}s=${title}`);
    setMovieList(data.Search);
    setSearchTerm("")
  };
  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search-box">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={() => fetchMovies(searchTerm)}>Search</button>
      </div>
      <div className="movies">
        {movieList?.length > 0 ? (
          movieList.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`}>
            <MovieCard
              title={movie.Title}
              imgUrl={movie.Poster}
              year={movie.Year}
              desc="Mannar cinema"
            />
            </Link>
          ))
        ) : (
          <h1>Found 0 match.. Please try again</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
