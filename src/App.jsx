import React, { useState, useEffect } from "react"
import facade from "./apiFacade";
import Header from "./components/Header.jsx";
import About from "./routes/About.jsx";
import Weather from "./routes/Weather.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.jsx";
import FAQ from "./routes/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./routes/SignUp.jsx";
import History from "./routes/History.jsx";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ username: "", roles: "" });
  const [currentCity, setCurrentCity] = useState("");
  const [hasPollution, setHasPollution] = useState(false);
  const [hasActivities, setHasActivities] = useState(false);


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
        <Route path="/" element={<Home currentCity={currentCity} setCurrentCity={setCurrentCity} hasPollution={hasPollution} setHasPollution={setHasPollution} hasActivities={hasActivities} setHasActivities={setHasActivities}/>}/>
        <Route path="/about" element={<About user={user} />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/weather" element={<Weather user={user} currentCity={currentCity} setCurrentCity={setCurrentCity} hasPollution={hasPollution} setHasPollution={setHasPollution} hasActivities={hasActivities} setHasActivities={setHasActivities}  />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/history" element={loggedIn ? <History user={user}  /> : <Home />}/>
      </Routes>
      <Footer className="bg-dark text-center text-lg-start text-white"/>
    </div>
  )
}




export default App;