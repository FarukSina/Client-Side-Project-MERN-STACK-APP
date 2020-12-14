/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/
import React from 'react'
import {Link} from "react-router-dom"
import classes from "./navbar.module.css"
export default function NavBar() {
    return (
     <nav className={` ${classes.navbar} navbar navbar-expand-lg navbar-light `}>
  <Link to="/" className="navbar-brand mr-5" >MovieLists</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/create" className="nav-link" >Create</Link>
      </li>
      <li className="nav-item active">
        <Link to="/covid" className="nav-link" >Covid</Link>
      </li>
      <li className="nav-item active">
        <Link to="/books" className="nav-link" >Book List</Link>
      </li>
      <li className="nav-item active">
        <Link to="/for-local" className="nav-link" >For Local</Link>
      </li>
      {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" href="#">Action</Link>
          <Link className="dropdown-item" href="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <Link className="nav-link disabled" href="#">Disabled</Link>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    )
}
