
import axios from "axios";
import { LoginUrl, registerUrl } from "./constant";

export function register(email, password, phoneNumber, birthday, address, gender, lastname, firstname, idRoles) {
    const body = {
        email,
        idRoles,
        phoneNumber,
        password,
        gender,
        address,
        birthday,
        lastname,
        firstname
    };

    return axios.post(registerUrl, body)
        .then((response) => console.log(response.data)) // Utilise response.data au lieu de response.body
        .catch((error) => console.log(error))
        .finally((error) => console.log(error));
}


export function login(phoneNumber, password) {
    const body = {
        phoneNumber,
        password
    };

    return axios.post(LoginUrl, body, { // Fournir les données correctement
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
        .finally((error) => console.log(error));
}
