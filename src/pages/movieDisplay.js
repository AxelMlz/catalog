import React from "react"
import {Link} from 'react-router-dom';
import movies from "../movies";


class movieDisplay extends React.Component {
    constructor(){
        super();

        this.state = {
                titles : "",
                id : 1,
                src:""
        };
         
    }
componentDidMount() { 
//movies.map( (  ) => ()
}
 
  render() {
    return (
        <div> 
        <h1>movieDisplay</h1>
        <p>Movie : {this.props.match.params.id}</p>
        </div>
    )
  }
}

export default movieDisplay;
