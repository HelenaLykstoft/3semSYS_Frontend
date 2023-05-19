import React from 'react';
import facade from "../apiFacade.js";
// This code is used to show the FAQ page
const Faq = () => {
    return (
        <div className="container">
            <h1 className="featurette-heading text-center">Frequently asked questions</h1>
            <div className="row row-flex">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-1">
                        <h4>Question 1: What kind of information can I find on this website?</h4>
                        <p><em>You can find detailed information about the weather and pollution levels in any city that you search for. This includes the current temperature, weather condition, description of the condition as well as the current air quality index (AQI) and pollutant status.</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-2">
                        <h4>Question 2: How accurate is the weather and pollution data on this website?</h4>
                        <p><em>We strive to provide the most accurate and up-to-date information possible. We source our weather data from reputable providers and use advanced algorithms to analyze and interpret the data. Our pollution data is collected from official sources and undergoes quality checks to ensure accuracy.</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-3">
                        <h4>Question 3: How often is the weather and pollution data updated?</h4>
                        <p><em>We update our weather and pollution data as frequently as possible to ensure that the information is current and accurate. Weather data is usually updated every hour, while pollution data is updated every few hours.</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-4">
                        <h4>Question 4: How do I search for a city's weather and pollution information?</h4>
                        <p><em>You can search for a city by typing its name into the search bar on our website. The search bar is usually located at the middle of the page. Once you've entered the city's name, our website will display the relevant weather and pollution information.</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-5">
                        <h4>Question 5: Can I get alerts for severe weather or high pollution levels in a city?</h4>
                        <p><em>No, we dont offer this service right now, but it might come in the future. Until then, there are other websites that provides alerts for severe weather or high pollution levels in a city.</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-6">
                        <h4>Question 6: Is there a mobile app available for this website?</h4>
                        <p><em>Yes, we offer a mobile app for iOS and Android devices that allows you to access weather and pollution information on-the-go. The app offers the same features and functionality as the website. Search on Google Play for XXXX</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-7">
                        <h4>Question 7: Is there a cost to use this website or mobile app?</h4>
                        <p><em>No, our website and mobile app are free to use. We believe that everyone should have access to accurate weather and pollution information, regardless of their ability to pay.</em></p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="content colour-8">
                        <h4>Question 8: How can I contact customer support if I have a question or issue with the website or mobile app?</h4>
                        <p><em>You can contact our customer support team by email. Our contact information is listed below. We strive to respond to all inquiries as quickly as possible.
                            Contacts:
                            - Email: cph-hl237@cphbusiness.dk</em></p>
                    </div>
                </div>
            </div>
            </div>

    );
};

export default Faq;