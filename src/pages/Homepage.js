import React from "react"
import {Link} from 'react-router-dom';
import movies from "../movies";


class Homepage extends React.Component {
  render() {
    return (
        <div> 
        <p>Homepage</p>
        {movies.map(movie => (
            movie.title
        )) }
        </div>
    )
  }
}

export default Homepage;
