import React, { useState } from "react"
import {Link} from "react-router-dom";

function LogIn({ login, logout}) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const [isOpen, setIsOpen] = useState(false);


    const performLogin = (evt) => {
      //evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login action
        performLogin();
    };
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <form id="loggingin" onChange={onChange}>
                <div className="input-group">
                <div className="dropdown">
                    <button
                        className="btn btn-outline-warning dropdown-toggle"
                        type="button"
                        id="loginDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={toggleDropdown}
                    >
                        Login
                    </button>
                    <ul
                        className={`dropdown-menu ${isOpen ? "show" : ""}`}
                        aria-labelledby="loginDropdown"
                        style={{ outline: "2px solid black" }}
                    >
                        <li>
                            <input
                                className="dropdown-item text-dark"
                                type="text"
                                placeholder="Username"
                                id="username"
                                style={{ color: "black", backgroundColor: "lightgray", borderBottom: "1px solid black"}} // Set text color explicitly to black
                            />
                        </li>
                        <li>
                            <input
                                className="dropdown-item text-dark"
                                type="password"
                                placeholder="Password"
                                id="password"
                                style={{ color: "black", backgroundColor: "lightgray" }} // Set text color explicitly to black
                            />
                        </li>
                        <li className="d-flex justify-content-center align-items-center">
                            <button
                                className="btn btn-outline-warning"
                                onClick={handleLogin}
                            >
                                Submit
                            </button>
                        </li>
                    </ul>
                </div>
                <Link to="/signup">
                    <button className="btn btn-outline-info ms-2">Sign up</button>
                </Link>
            </div>
            </form>
        </div>
    );
}
export default LogIn;  