import React from 'react';

const SignUp = () => {



    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <form>
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