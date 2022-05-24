import React from 'react'

const MovieCard = ({title, imgUrl, year, desc}) => {
  return (
    <div className="movie">
      <div>
        {/* <p>{year}</p> */}
      </div>
      <div>
        <img
          src={imgUrl}
          alt="blank"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{year}</span>
      </div>
    </div>
  );
}

export default MovieCard
