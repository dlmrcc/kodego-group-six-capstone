import { serverRoutes } from "../const";



export const AddPrisonAPI = (prisonName) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": prisonName,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddPrison, requestOptions)
}

export const GetPrisonListAPI = (status) => {
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
    return fetch(serverRoutes.GetPrisonList, requestOptions)
}

export const DeletePrisonAPI = (id) => {
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
    return fetch(serverRoutes.DeletePrisonList, requestOptions)
}

export const UpdatePrisonAPI = (prisonName, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": prisonName,
        "id": id,
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.UpdatePrison, requestOptions)
}


