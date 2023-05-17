import React, {useState, useEffect} from 'react';
import {weatherURL} from "../settings.js";


const Weather = ({user, currentCity, setCurrentCity , hasPollution, setHasPollution, hasActivities, setHasActivities}) => {
    const [weather, setWeather] = useState({
        cityname: "",
        temperature: "",
        condition: "",
        description: "",
    });
    const [pollution, setPollution] = useState({
        aqi: "",
        status: "",
    });
    // const [activity, setActivity] = useState({
    //     activityName: "",
    //     activityDescription: "",
    //     isOutDoors: false,
    // });
    const [activity, setActivity] = useState([{
            activityName: "",
            activityDescription: "",
            isOutDoors: false,
    }]);

    function getisOutdoor () {if (activity.isOutDoors){
        return "Outdoors"
    }else return "Indoors"}

    const getWeatherWhenLoggedIn = () => {
        if(hasActivities){
            console.log("true");
        }else {
            console.log("false");
        }
        console.log(currentCity);
        if (currentCity !== "") {
            fetch(weatherURL + "/" + currentCity + "/" + user.username)
                .then(response => response.json())
                .then(data => {
                    setWeather({
                        cityname: data.cityname,
                        temperature: data.weatherDTO.temperature,
                        condition: data.weatherDTO.condition,
                        description: data.weatherDTO.description,
                    });
                    if(hasPollution){
                        setPollution({
                            aqi: data.pollutionDTO.aqi,
                            status: data.pollutionDTO.status,
                        })
                    }
                    if(hasActivities){
                        var actiArray = [];

                        for (let i = 0; i < data.activityDTOList.length; i++){
                            actiArray.push(data.activityDTOList[i])
                        }

                        setActivity([] = actiArray)
                    }
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
        console.log("The getWeatherIfLoggedIn has been run");

    };
    const getWeather = () => {
        if(hasActivities){
            console.log("true");
        }else {
            console.log("false");
        }
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
                    if(hasPollution){
                        setPollution({
                            aqi: data.pollutionDTO.aqi,
                            status: data.pollutionDTO.status,
                        })
                    }
                    if(hasActivities){
                        var actiArray = [];

                        for (let i = 0; i < data.activityDTOList.length; i++){
                            actiArray.push(data.activityDTOList[i])
                        }

                        setActivity([] = actiArray)
                    }
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
        console.log("The getWeather has been run");
    };

    useEffect(() => {

        if (user.username !== ""){
            getWeatherWhenLoggedIn();
            console.log("user logged in");
        } else {
            getWeather();
            console.log("user not logged in");
        }
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
                    {hasPollution ? <>
                            <p className="lead"><strong>Air quality index: </strong>{pollution.aqi}<strong> Status:</strong> {pollution.status}</p>

                        </>
                        :''}
                    {hasActivities && activity.length > 0 && (
                        <>
                            <p className="lead"><strong>Activities:</strong></p>
                            {activity.map((item, index) => (
                                <div key={index}>
                                    <p className="lead"><strong>Activity name: </strong>{item.activityName}</p>
                                    <p className="lead"><strong>Description:</strong> {item.activityDescription}</p>
                                    <p className="lead"><strong>This activity is {item.isOutDoors ? 'Outdoors' : 'Indoors'}</strong></p>
                                </div>
                            ))}
                        </>
                    )}
                    {hasActivities && activity.length === 0 && (
                        <>
                            <p className="lead"><strong>Activities:</strong></p>
                            <p className="lead"><strong>Oops! No activities found for {currentCity} at the moment, but stay tuned!
                            </strong> Exciting activities will be added soon for you to enjoy. In the meantime, you can explore other parts of our website or check back later for updates.</p>

                        </>
                    )}
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
            </div>
        </div>
    );
};

export default Weather;
