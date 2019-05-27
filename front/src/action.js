import axios from "../utils/axios";

export async function authenticate(form) {
    return await axios
        .post(`/login`, { form })
        .then(({ data }) => {
            //wrap in test for valid mongo id
            return {
                type: "LOG_IN",
            };
        })
        .catch(err => console.log(err));
}

export async function signout() {
    return await axios
        .get(`/logout`)
        .then(({ data }) => {
            return {
                type: "LOG_OUT",
            };
        })
        .catch(err => console.log(err));
}
