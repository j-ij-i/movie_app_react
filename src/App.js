import React from "react";
import axios from "axios"; 
import PropTypes from "prop-types";
import Movie from "./Movie";

class App extends React.Component{
    constructor(props){
      super(props)
      console.log("hello");
    }

    state = {
      isLoading: true,
      movies: []
    };

    getMovies = async() => {
      const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
      console.log(movies);
      this.setState({movies, isLoading: false});
    }

    componentDidMount(){
      this.getMovies();
    }

    render(){
      const {isLoading, movies} = this.state;
      return <div>{isLoading ? "Loading..." : movies.map(movie=> {
        return <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}/>
      })}</div>;
    }

}


export default App;