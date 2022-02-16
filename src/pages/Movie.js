import React from "react"
import {Link} from 'react-router-dom';
import movies from "../movies.json";
import Homepage from "../pages/Homepage"
import "../Global.css"


class Movie extends React.Component {
    constructor(){
        super()
        this.state={
            title:"",
            director:"",
            stars:"",
            image: "",
            description:"",
        }
        
    }
    componentDidMount(){

        const movie = movies[(this.props.match.params.id) - 1]
        console.log(movie)
        this.setState  ({
            title : movie.title,
            director : movie.director,
            stars : movie.stars,
            image : movie.image,
            description : movie.description,
        })


    }
    render() {
        return (
            <div>
                <h1 className="Title">Title : {this.state.title}</h1>
                <ul> 

                
                <li>{this.state.director}</li>
                <li className="stars">{this.state.stars}</li>
                <img src={this.state.image} alt="movie pictures"/>
                <li>{this.state.description}</li>
             
                </ul>
                <Link  className="homepage"to="/">Homepage</Link>
            </div> 
        )
    }
}

export default Movie;
