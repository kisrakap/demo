import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from 'react-router-dom'
import SearchForm from './SearchForm'

let Navbar = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" datatestid="navbar">
            <a className="navbar-brand" href="#">Tv Show</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse  navbar-collapse" id="navbarNav">
                <ul className="navbar-nav row d-flex mr-1 w-100">
                <li className="nav-item active">
                    <a className="nav-link" ><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to="/rating">Rating</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to="/favorites">Favorites</Link></a>
                </li>
                <li className="nav-item ml-auto">
                  <SearchForm/>
                </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar 