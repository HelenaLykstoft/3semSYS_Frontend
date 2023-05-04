import React from 'react';

const Home = () => {

    return (
        <div className="row featurette" class="row justify-content-center">
            <div className="col-md-10">
                <h1 className="featurette-heading">Weather App:
                    <span className="text-muted"> Here you can search for weather</span>
                </h1>
                <br/>
                <h4 class="text-center">Below you can search for a city and see the weather:</h4>
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon"/>
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
                <br/>
                <p>If you want pollution data, please check this box:</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Pollution information
                        </label>
                </div>
                <br/>
                <p>If you want to get reccomendations on activities, please check this box:</p>
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