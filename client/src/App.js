import NavBar from "./layout/NavBar"
import MoviesList from "./components/MoviesList"
import CreateMovie from "./components/CreateMovie"
import Covid from "./components/Covid"
import UpdateMovie from "./components/UpdateMovie"
/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

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
        <Route path="/covid" component={Covid}></Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
