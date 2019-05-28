// import axios from "./utils/axios";

export function login(form = {}) {
    // return await axios
    //     .post(`/login`, { form })
    //     .then(({ data }) => {
    //         //wrap in test for valid mongo id
    //         return {
    //             type: "LOG_IN",
    //         };
    //     })
    //     .catch(err => console.log(err));
    return {
        type: "LOG_IN",
        userid: 66,
    }

}

export async function signout() {
    
    // return await axios
    //     .get(`/logout`)
    //     .then(({ data }) => {
            return {
                type: "LOG_OUT",
                userid: null,
            };
        // })
        // .catch(err => console.log(err));

}
