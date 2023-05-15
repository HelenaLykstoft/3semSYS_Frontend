import React, { useState } from "react"

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
          <input placeholder="Username" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin} className="btn btn-outline-primary">Login</button>
        </form>
      </div>
    )
  }
export default LogIn;  