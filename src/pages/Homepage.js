import React from "react"
import {Link} from 'react-router-dom';
import movies from "../movies";
import Movie from "../pages/Movie"
import "../Homepage.css"

class Homepage extends React.Component {
  render() {
    return (
        <div>
            <h1>Homepage</h1>
            <nav> 
            {movies.map(movie => {
                return <li className = "movieLink" > <Link to={`../movies/${movie.id}`} component={Movie}>{movie.title}</Link></li>
            })}
         
            </nav>
        </div> 
    )
}
}
export default Homepage;
