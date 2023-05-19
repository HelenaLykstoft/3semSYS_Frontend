import React, { useState,useEffect } from "react"
import facade from "../apiFacade";

// This code ensures that the user can see his role and his name in the header
function LoggedIn({user, logout}){
    // Usestate is used to set the data from the server
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    // UseEffect is used to fetch the data from the server
    useEffect(() => {
      const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';

      facade.fetchData(url).then(res => {
        console.log(res);
        setDataFromServer(res.msg)});

    },[])

    // Returns the users role and username to be shown in the header
    return (
      <div>
        <div id="loginview">{user.username} with roles: {user.roles} <button onClick={logout} className="btn btn-outline-primary">Logout</button></div>
      </div>
    )
  }
export default LoggedIn;