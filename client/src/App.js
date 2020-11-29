import NavBar from "./layout/NavBar"
import MoviesList from "./components/MoviesList"
import CreateMovie from "./components/CreateMovie"
import UpdateMovie from "./components/UpdateMovie"
import {Router, Switch, Route} from "react-router-dom"
import history from "./history"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router history={history}>
      <div className="container">
      <NavBar/>
        <Switch>
        <Route exact path="/" component={MoviesList}></Route>
        <Route path="/create" component={CreateMovie}></Route>
        <Route path="/edit/:id" component={UpdateMovie}></Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
