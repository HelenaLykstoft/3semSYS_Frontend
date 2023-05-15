import {NavLink} from "react-router-dom";
import React from "react";
import LoggedIn from "./LoggedIn.jsx";
import LogIn from "./LoginForm.jsx";


const Header = ({loggedIn, login, logout}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h5 className="navbar-brand">Weather Quest :D</h5>
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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/About">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/FAQ">FAQ</NavLink>
                            </li>
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