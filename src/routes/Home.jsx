import React from 'react';
import {useState} from "react";
import Weather from "./Weather.jsx";
import {Link} from "react-router-dom";

const Home = ({currentCity, setCurrentCity,hasPollution, setHasPollution}) => {


    const changeHandler = (event) => {
        setCurrentCity(event.target.value);
        //event.stopPropagation();
    }

    const checkboxChangePoll = (event) =>{
        if(event.target.checked){
            //console.log("checkbox if: "+ event.target.checked)
            setHasPollution(event.target.checked);
        }else {
            //console.log("checkbox else: "+event.target.checked)
            setHasPollution(event.target.checked);
        }

    }

    return (
        <div className="row featurette justify-content-center">
            <div className="col-md-10">
                <h1 className="featurette-heading">Weather App:
                    <span className="text-muted"> Here you can search for weather</span>
                </h1>
                <br/>
                <h4 className="text-center">Below you can search for a city and see the weather:</h4>
                <div className="input-group">
                    <input type="text" onChange={changeHandler} className="form-control rounded" placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon"/>
                    <Link to="/weather">
                    <button type="button" className="btn btn-outline-primary">search</button>
                        </Link>
                </div>

                <br/>
                <p><em>If you want pollution data, please check this box:</em></p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={hasPollution} onChange={checkboxChangePoll} id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Pollution information
                        </label>
                </div>
                <br/>
                <p><em>If you want to get reccomendations on activities, please check this box:</em></p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Reccomended activities
                    </label>
                </div>
                <br/>
                <br/>
                <p className="lead">Pretty text</p>
                <p className="lead">More</p>
                <p className="lead">Even more</p>
                <p className="lead">A lot more</p>
            </div>
        </div>

    );
};

export default Home;