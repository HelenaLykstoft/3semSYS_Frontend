import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start">
                        <p className="text-muted mb-0">Copyright © 2023
                            <a href="#"> Weather & Pollution Info</a> All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p className="mb-0">Contact us: info@weatherpollution.com</p>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <p className="mb-0">Website created by:</p>
                        <ul className="list-unstyled">
                            <li>Helena Lykstoft</li>
                            <li>Jamie Callan</li>
                            <li>Isak Møgelvang</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;