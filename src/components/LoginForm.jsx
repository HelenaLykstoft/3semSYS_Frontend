import React, { useState } from "react"
import {Link} from "react-router-dom";

function LogIn({ login, logout}) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
  
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
  
    return (
      <div>
          <form id="loggingin" onChange={onChange} >
          <input className="logininput" placeholder="Username" id="username" />
          <input className="logininput" placeholder="Password" id="password" type="password" />
          <button onClick={performLogin} className="btn btn-outline-warning">Login</button>
              <Link to="/signup">
              <button className="btn btn-outline-info" >Sign up</button>
              </Link>
          </form>
      </div>
    )
  }
export default LogIn;  