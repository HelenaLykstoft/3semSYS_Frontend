import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";

const About = ({user}) => {

    const [dataFromServer, setDataFromServer] = useState("Loading...")
    const [isUpdated, setIsUpdated] = useState(false);
    let data ="";

useEffect( () => {
    if(user.username === ''){ setDataFromServer('Please login to see date from server');
        return;
}
    const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';

    facade.fetchData(url).then(res => {

        console.log(res);
        setDataFromServer(res.msg)});
},[user]);

    return (
        <div className="row featurette" className="row justify-content-center">
            <div className="col-md-10">
                <h1 className="featurette-heading">About page:
                    <span className="text-muted"> Thanks for checking out about!</span>
                </h1>
            <p><em>Our journey began over 50 years ago with a simple idea: to provide accurate and reliable weather information to our community. Back then, weather forecasting was still in its early stages, and many people relied on inaccurate or outdated information to plan their day. We saw an opportunity to make a difference and decided to take action.</em></p>
            <br/>
                <p><em>Our founders were a group of passionate weather enthusiasts who spent countless hours studying weather patterns, tracking storms, and analyzing data. They were committed to providing the most accurate and reliable weather information possible, and they worked tirelessly to make that a reality.</em></p>
                <br/>
                <p><em>As technology advanced, so did our capabilities. We were one of the first weather information providers to use computer models and satellite imagery to track storms and forecast weather patterns. This allowed us to provide more detailed and accurate information than ever before.</em></p>
                <br/>
                <p><em>In the 1990s, we expanded our services to include pollution information. We recognized that air quality was a growing concern for many people, and we wanted to provide information that could help them make informed decisions about their health and well-being. We worked with government agencies and other organizations to collect pollution data and develop tools to analyze and interpret that data.</em></p>
                <br/>
                <p><em>Today, we continue to be a trusted source of weather and pollution information for people around the world. Our team of experts is dedicated to providing the most accurate and up-to-date information possible, using the latest technology and techniques to analyze and interpret data. We're proud of our legacy and our commitment to helping people stay safe and healthy, no matter what the weather or pollution conditions may be.</em></p>
                <br/>
                <p><em>Thank you for choosing us as your source for weather and pollution information. We look forward to serving you for many years to come!</em></p>
                <br/>
            </div>
        </div>
    );
};

export default About;