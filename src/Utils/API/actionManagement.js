import { serverRoutes } from "../const";



export const AddActionAPI = (actionName) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": actionName,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddAction, requestOptions)
}

export const GetActionListAPI = (status) => {
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
    return fetch(serverRoutes.GetActionList, requestOptions)
}

export const DeleteActionAPI = (id) => {
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
    return fetch(serverRoutes.DeleteAction, requestOptions)
}

export const UpdateActionAPI = (actionName, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": actionName,
        "id": id,
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.UpdateAction, requestOptions)
}


