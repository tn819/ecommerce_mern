import axios from "./utils/axios";

export async function isLoggedIn() {
    return axios
        .get(`/isloggedin`)
        .then(({ data }) => {
            console.log(data);
            return {
                type: "LOGGED_IN",
                isLoggedIn: data.success,
                username: data.user
            };
        })
        .catch(err => console.log(err));

}

export async function login({username, password}) {
    return axios
        .post(`/login`, { username, password })
        .then(({ data }) => {
            console.log(data);
            
            return {
                type: "LOG_IN",
                username: data.user
            };
        })
        .catch(err => console.log(err));

}

export async function getListings() {
    return axios
        .post(`/items`, { })
        .then(({ data }) => {
            console.log(data);
            
            return {
                type: "GET_LISTINGS",
                // listings: data.user
            };
        })
        .catch(err => console.log(err));

}

export async function register({email, firstname, lastname, username, password}) {
    return axios
        .post(`/register`, {email, firstname, lastname, username, password})
        .then(({ data }) => {
            console.log(data);
            
            //wrap in test for valid mongo id
            return {
                type: "REGISTER",
                username: data.user
            };
        })
        .catch(err => console.log(err));

}


export async function addListing({price, title, description, keywords, location, type, about, ageFrom, ageTo, sex, lifestage, wantedDescription}) {
    return axios
        .post(`/add`, {price, title, description, keywords, location, type, about, wanted: {ageFrom, ageTo, sex, lifestage, description: wantedDescription}})
        .then(({ data }) => {
            console.log(data);
            return {
                type: "ADD",
            };
        })
        .catch(err => console.log(err));

}

export async function signout() {
    
    // return await axios
    //     .get(`/logout`)
    //     .then(({ data }) => {
            return {
                type: "LOG_OUT",
                username: null,
            };
        // })
        // .catch(err => console.log(err));

}
