import NavBar from "./layout/NavBar"
import MoviesList from "./components/MoviesList"
import CreateMovie from "./components/CreateMovie"
import Covid from "./components/Covid"
import UpdateMovie from "./components/UpdateMovie"
import Books from "./components/Books"
import ViewMovie from "./components/ViewMovie.js";
import MovieList from "./components/local/MovieList";
/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita 
Sub: Parthkumar Patel
Sub: Burak Akcal
*/
import NotificationProvider from './Notifications/index';
import {Router, Switch, Route} from "react-router-dom"
import history from "./history"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NotificationProvider>
      <Router history={history}>
      <div className="container">
      <NavBar/>
        <Switch>
        <Route exact path="/" component={MoviesList}></Route>
        <Route path="/create" component={CreateMovie}></Route>
        <Route path="/edit/:id" component={UpdateMovie}></Route>
        <Route path="/covid" component={Covid}></Route>
        <Route path="/view/:id" component={ViewMovie}></Route>
        <Route path="/books" component={Books}></Route>
        <Route path="/for-local" component={MovieList}></Route>
        </Switch>
      </div>  
      </Router>
      </NotificationProvider>
    </div>
  );
}

export default App;
