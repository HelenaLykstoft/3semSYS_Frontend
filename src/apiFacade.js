import {baseURL, historyURL} from "./settings.js";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function apiFacade() {

    // Method to login and fetch the token from the backend
    const login = (user, password) => {
        // console.log("login");
        const options = makeOptions("POST", true, {username: user, password: password});
        return fetch(baseURL + "/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token)
            })
    }

    // Method to fetch data from the backend
    const fetchData = (ressource) => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(baseURL + ressource, options).then(handleHttpErrors);
    }

    // Method to make options for the fetch
    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    // Method to set the token in the local storage
    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    // Method to get the token from the local storage
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    // Method to check if the user is logged in
    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    // Method to logout the user
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    // Method to read the token
    function readJwtToken(token) {
        console.log('TOKEN: ', token);
        // console.log('TOKEN opened with atob: ',window.atob(token));
        var base64Url = token.split('.')[1];
        // console.log(base64Url);
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        // console.log(base64);
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log(jsonPayload);
        return JSON.parse(jsonPayload);
    }

    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        readJwtToken,
    }
}

const facade = apiFacade();
export default facade;
