import React from 'react';
import {Link, Route, useNavigate} from "react-router-dom";
import {baseURL} from "../settings.js";
// Signup page
const SignUp = () => {
    const navigateTo = useNavigate();

    // Handles the submit of the form
    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = document.getElementById('nameInput').value;
        const password = document.getElementById('passwordInput').value;

        if (username === '' || password === '') {
            alert('Ensure you input a value in both fields!');
        } else {
            const formData = {
                username: username,
                password: password
            };

            try {
                const response = await fetch(baseURL + "/login/signup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // Successfully sent the form data to the backend
                    console.log('Form data sent successfully');
                    // Reset the form fields
                    document.getElementById('nameInput').value = '';
                    document.getElementById('passwordInput').value = '';

                } else {
                    // Failed to send the form data to the backend
                    console.log('Failed to send form data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        navigateTo("/");
    };
    // Returns the signup form
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <form id="loginform" method="post" onSubmit={handleSubmit} >
                                <div className="form-group">
                                    <label htmlFor="nameInput">Name</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Enter a password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPasswordInput">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Confirm your password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-4">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;