import React, { useEffect, useState } from 'react';
import facade from '../apiFacade';

const History = ({ user }) => {
    const [cityHistory, setCityHistory] = useState([]);

    useEffect(() => {
        // Fetch the city history data from the backend
        facade.fetchCityHistory().then((res) => {
                setCityHistory(res);
        });
    });

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Your search history</h2>
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
