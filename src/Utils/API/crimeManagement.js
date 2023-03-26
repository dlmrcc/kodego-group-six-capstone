import { serverRoutes } from "../const";



export const AddCrimeAPI = (crimeName) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": crimeName,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddCrime, requestOptions)
}

export const GetCrimeListAPI = (status) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "status": status,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.GetCrimeList, requestOptions)
}

export const DeleteCrimeAPI = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": id,
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.DeleteCrimeList, requestOptions)
}

export const UpdateCrimeAPI = (crimeName, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": crimeName,
        "id": id,
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.UpdateCrime, requestOptions)
}


