import {NavLink} from "react-router-dom";
import React from "react";
import LoggedIn from "./LoggedIn.jsx";
import LogIn from "./LoginForm.jsx";
import logo from "../images/WeatherQuestWithoutBackgroundForHeader.png"; // Import your logo image here


const Header = ({loggedIn, login, logout, user}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <img src={logo} alt="Weather Quest Logo" className="logo-image" />
                    <div>
                        <blockquote className="blockquote">
                    <h5 className="navbar-brand"><strong>Weather Quest</strong></h5>
                        <footer className="blockquote-footer">The best weather app ever  </footer>
                        </blockquote>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/About">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/FAQ">FAQ</NavLink>
                            </li>
                            {loggedIn ? (<li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/history">History</NavLink>
                            </li>) : (<></>)}
                        </ul>
                    </div>
                    <div className="float-right">
                        {!loggedIn ? (<LogIn login={login}/>) :
                            (<>
                                <LoggedIn user={user} logout={logout}/>
                            </>)}
                    </div>
                    </div>
            </nav>
        </header>
    );
};

export default Header;