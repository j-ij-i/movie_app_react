import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return(     
    <Link
    to={{
        pathname: `/movie/${id}`,
        state: {
            year,
            title,
            summary,
            poster,
            genres  
        }
    }}> 
        <div className="movies_ movie">
        <img src={poster} alt={title} onError=  {(e) => {
            e.target.src = "https://cdn3.iconfinder.com/data/icons/hosting-glyphs/60/error__attack__dos_404_-512.png";
        }}
        title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary.slice(0,140)}...</p>
            <ul className="movie_genres">
                {genres.map((genre, index) => (
                <li key={index} className="genres_genre">{genre}</li>
                 ))}
            </ul>
        </div>
    </div>
    </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.string)
        .isRequired
};

export default Movie;