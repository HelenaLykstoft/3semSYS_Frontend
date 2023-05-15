import React, { useState,useEffect } from "react"
import facade from "../apiFacade";
function LoggedIn({user, logout}){
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => {
      const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';

      facade.fetchData(url).then(res => {
        console.log(res);
        setDataFromServer(res.msg)});

    },[])
  
    return (
      <div>
        <div id="loginview">{user.username} with roles: {user.roles} <button onClick={logout} className="btn btn-outline-primary">Logout</button></div>
      </div>
    )
  }
export default LoggedIn;