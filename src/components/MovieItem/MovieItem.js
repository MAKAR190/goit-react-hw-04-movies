import React from "react";
import styles from "./MovieItem.module.css";
import { Link } from "react-router-dom";
export default function MovieItem({ goBack, match, movie }) {
  return (
    <div>
      <button onClick={goBack}>&#8592; Go back</button>
      <div className={styles.wrapper}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt="movie"
        />
        <div className={styles.info}>
          <h2>
            {movie.title || movie.name}({movie.release_date.substr(0, 4)})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <div className={styles.genres}>
            {movie.genres.map((el) => (
              <p key={el.id}>{el.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.addition}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/review`}>Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
