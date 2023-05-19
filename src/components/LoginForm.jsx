import React, { useState } from "react"
import {Link} from "react-router-dom";
// This code makes our login form to a dropdown menu
function LogIn({ login, logout}) {
    // Usestate is used to set the data from the server
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const [isOpen, setIsOpen] = useState(false);

    // performLogin is used to perform the login action
    const performLogin = (evt) => {
      //evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }

    // toggleDropdown is used to toggle the dropdown menu
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // handleLogin is used to handle the login action
    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login action
        performLogin();
    };

    // onChange is used to set the login credentials
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    // Returns the login form as a dropdown menu
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