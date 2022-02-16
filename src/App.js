import React from "react"
import './App.css';
import Homepage from "./pages/Homepage";
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import movies from "./movies.json";
import Movie from "./pages/Movie";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav> 
     
        </nav>
          <Switch>
            <Route exact path ="/" component={Homepage}/>
            <Route path ="/movie/:id" component={Movie}/>
          </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
