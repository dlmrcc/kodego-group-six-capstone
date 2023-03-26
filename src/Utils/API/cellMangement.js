import { serverRoutes } from "../const";



export const AddCellAPI = (cellName, prisonId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": cellName,
        "prison_id": prisonId,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddCell, requestOptions)
}

export const GetCellListAPI = (status) => {
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
    return fetch(serverRoutes.GetCellList, requestOptions)
}

export const DeleteCellAPI = (id) => {
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
    return fetch(serverRoutes.DeleteCellList, requestOptions)
}

export const UpdateCellAPI = (cellName, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": cellName,
        "id": id,
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.UpdateCell, requestOptions)
}


export const GetCellList2API = (status) => {
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
    return fetch(serverRoutes.GetCellList2, requestOptions)
}
