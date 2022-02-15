import React from "react"
import {Link} from 'react-router-dom';
import movies from "../movies";
import Homepage from "../pages/Homepage"


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

        this.setState  ({
            //title : movie.title,
            director : movie.director,
            stars : movie.stars,
            image : movie.image,
            description : movie.description,
        })


    }
    render() {
        return (
            <div>
                <ul> 

                <li>{this.state.title}</li>
                <li>{this.director}</li>
                <li>{this.stars}</li>
                <li>{this.image}</li>
                <li>{this.description}</li>
             
                </ul>
                <Link to="/">Homepage</Link>
            </div> 
        )
    }
}

export default Movie;
