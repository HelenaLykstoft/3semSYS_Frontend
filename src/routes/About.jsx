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
            <p className="lead">Text here</p>
            </div>
        </div>
    );
};

export default About;