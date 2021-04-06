import React from "react"
import PropTypes from "prop-types";

class App extends React.Component{
    constructor(props){
      super(props)
      console.log("hello");
    }

    state = {
      isLoading: true,
      movies: []
    };

    componentDidMount(){
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 6000);
    }
    
    render(){
      const {isLoading} = this.state;
      return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
    }

}


export default App;