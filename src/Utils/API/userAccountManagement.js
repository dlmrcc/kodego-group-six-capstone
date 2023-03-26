import { serverRoutes } from "../const";

export const UpdatePasswordAPI = (username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": username,
        "password": password,
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.UpdatePassword, requestOptions)
}

export const CreateNewUSer = (firstname, middlename, lastname, username, password, avatar, type) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "firstname": firstname,
        "middlename": middlename,
        "lastname": lastname,
        "username": username,
        "password": password,
        "avatar": avatar,
        "type": type
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddNewUsers, requestOptions)
}

