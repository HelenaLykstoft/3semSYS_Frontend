import React, { useState, useEffect } from "react"
import facade from "./apiFacade";
import Header from "./components/Header.jsx";
import About from "./routes/About.jsx";
import Weather from "./routes/Weather.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.jsx";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ username: "", roles: "" });
  const [currentCity, setCurrentCity] = useState("");


  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setUser({ username: "", roles: "" })
  }
  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      const token = facade.readJwtToken(facade.getToken());
      setUser({ username: token.username, roles: token.roles });
      setLoggedIn(true);
    });
  }

  return (
    <div>
      <Header loggedIn={loggedIn} login={login} user={user} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home currentCity={currentCity} setCurrentCity={setCurrentCity} />}/>
        <Route path="/about" element={<About user={user} />}/>
        <Route path="/weather" element={<Weather currentCity={currentCity} setCurrentCity={setCurrentCity}/>}/>
      </Routes>
    </div>
  )
}




export default App;