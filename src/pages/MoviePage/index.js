import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apikey=c9764e29&";

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [poster, setPoster] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}i=${id}`).then((res) => {
      setPoster(res.data.Poster);
      delete res.data.Ratings;
      delete res.data.Poster;
      delete res.data.Response;
      delete res.data.Website;
      setMovieDetails(res.data);
    });
  }, []);

  return (
    <div className="app">
      <h1>{movieDetails?.Title}</h1>
      <br />
      <div className="poster">
        <img src={poster} alt="no data" />
      </div>
      <div className="details">
        <h2>Details</h2>
        <br />
        {Object.entries(movieDetails).map(([key, val]) => (
          <div key={key} className="single-info">
            <div className="info-key">
              <h3>{key}</h3>
            </div>
            <div className="info-value">
              <h2>{val}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
