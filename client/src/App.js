import './App.css';

import NavBar from "./layout/NavBar"
import MoviesList from "./components/MoviesList"
import CreateMovie from "./components/CreateMovie"
import UpdateMovie from "./components/UpdateMovie"
import {Router, Switch, Route} from "react-router-dom"
import history from "./history"
function App() {
  return (
    <div className="App">
      <Router history={history}>
      <NavBar/>
        <Switch>
        <Route exact path="/" component={MoviesList}></Route>
        <Route path="/create" component={CreateMovie}></Route>
        <Route path="/edit" component={UpdateMovie}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
