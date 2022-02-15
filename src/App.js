import React from "react"
import './App.css';
import Homepage from "./pages/Homepage";
import movieDisplay from "./pages/movieDisplay"
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import movies from "./movies";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Movies</h1>
        <nav> 

        </nav>
          <Switch>
            <Route exact path ="/" component={Homepage}/>
          </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
