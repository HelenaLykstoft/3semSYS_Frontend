import React, { useEffect, useState } from 'react';
import facade from '../apiFacade';
import {historyURL, weatherURL} from "../settings.js";
// This code is used to show the logged in users search history
const History = ({user}) => {
    // Usestate is used to set the data from the server
    const [cityHistory, setCityHistory] = useState([]);

    // UseEffect is used to fetch the data from the server
    useEffect(() => {
        // Fetch the city history data from the backend
        fetchCityHistory();
        });

    // Fetch the city history data from the backend
    // ? Might need changing
    const fetchCityHistory = () => {
        fetch(historyURL + "/" + user.username)
            .then(response => response.json())
            .then(data => {
                setCityHistory(data);
            });
    };

    // Returns the users search history
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Search history for: {user.username}</h2>
                            {cityHistory.length > 0 ? (
                                <ul className="list-group">
                                    {cityHistory.map((city, index) => (
                                        <li key={index} className="list-group-item">
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center">No history available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
