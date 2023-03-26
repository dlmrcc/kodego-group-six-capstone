import { serverRoutes } from "../const";


export const InmateCodeAPI = () => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
    };
    return fetch(serverRoutes.InmateCode, requestOptions);
};

export const AddInmatesAPI = (
    code, firstname, lastname, middlename, sex, dob, address, civilStatus,
    eyeColor, complexion, cellId, yearSentence, dateFrom, dateEnd,
    emergencyName, emergencyContact, emergencyRelationship, imagePath, extension,
    visitingPrivilage,
) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "code": code,
        "firstname": firstname,
        "lastname": lastname,
        "middlename": middlename,
        "sex": sex,
        "dob": dob,
        "address": address,
        "marital_status": civilStatus,
        "eye_color": eyeColor,
        "complexion": complexion,
        "cell_id": cellId,
        "sentence": yearSentence,
        "date_from": dateFrom,
        "date_end": dateEnd,
        "emergency_name": emergencyName,
        "emergency_contact": emergencyContact,
        "emergency_relation": emergencyRelationship,
        "image_path": imagePath,
        "extension": extension,
        "visiting_privilage": visitingPrivilage,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddInmate, requestOptions)
}

export const GetInmateListAPI = (status) => {
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
    return fetch(serverRoutes.GetInmateList, requestOptions)
}


