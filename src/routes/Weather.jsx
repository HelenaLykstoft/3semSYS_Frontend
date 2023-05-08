import React, {useState, useEffect} from 'react';
import {weatherURL} from "../settings.js";

const Weather = ({currentCity, setCurrentCity}) => {
    const [weather, setWeather] = useState({
        cityname: "",
        temperature: "",
        condition: "",
        description: "",
    });

    useEffect(() => {
        const getWeather = () => {
            console.log(currentCity);
            if (currentCity !== "") {
                fetch(weatherURL + "/" + currentCity)
                    .then(response => response.json())
                    .then(data => {
                        setWeather({
                            cityname: data.cityname,
                            temperature: data.weatherDTO.temperature,
                            condition: data.weatherDTO.condition,
                            description: data.weatherDTO.description,
                        });
                        console.log(data);
                    })
                    .catch(err => {
                        setWeather({
                            cityname: "Could not find city: " + currentCity,
                            temperature: "",
                            condition: "",
                            description: "",
                        });
                        console.error(err);
                    });
            }
        };

        getWeather();
    }, [currentCity]);

    return (
        <div className="row featurette justify-content-center">
            <div className="col-md-10">
                <h1 className="featurette-heading">Current weather for {currentCity}:</h1>
            <br />
            {weather.cityname ? (
                <>
                    <p className="lead"><strong>City:</strong> {weather.cityname}</p>
                    <p className="lead"><strong>Temperature: </strong>{weather.temperature}</p>
                    <p className="lead"><strong>Condition: </strong>{weather.condition}</p>
                    <p className="lead"><strong>Description: </strong>{weather.description}</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
            </div>
        </div>
    );
};

export default Weather;
