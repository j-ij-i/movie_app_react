import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log("hello");
    }

    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get(
            "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
        );

        if(!movies.poster)
            console.log(movies.poster);

          this.setState({movies, isLoading: false});
          console.log(movies);


    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return <div className="container">{
                isLoading
                    ? <div className="loader">
                      <span className="loader_text">
                      Loading...
                      </span>
                    </div>
                    : (
                        <div className="movies">
                        {movies.map(movie => (
                         <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}/>
                    ))}
                    </div>
                    )
              
    }  </div>;
}
}

export default Home;