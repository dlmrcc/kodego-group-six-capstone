export const myExpressURL = 'http://localhost:3010';


export const serverRoutes = {
    Login: myExpressURL + '/api/login',
    AddNewUsers: myExpressURL + '/api/register',
    UpdatePassword: myExpressURL + '/api/updateuseraccount',
    //action
    AddAction: myExpressURL + '/api/action/addaction',
    GetActionList: myExpressURL + '/api/action/list',
    DeleteAction: myExpressURL + '/api/action/deleteaction',
    UpdateAction: myExpressURL + '/api/action/updateaction',

    //prison list
    AddPrison: myExpressURL + '/api/prison/addprison',
    GetPrisonList: myExpressURL + '/api/prison/list',
    DeletePrisonList: myExpressURL + '/api/prison/deleteprison',
    UpdatePrison: myExpressURL + '/api/prison/updateprison',

    //crime
    AddCrime: myExpressURL + '/api/crime/addcrime',
    GetCrimeList: myExpressURL + '/api/crime/list',
    DeleteCrimeList: myExpressURL + '/api/crime/deletecrime',
    UpdateCrime: myExpressURL + '/api/crime/updatecrime',

    //cell
    AddCell: myExpressURL + '/api/cell/addcell',
    GetCellList: myExpressURL + '/api/cell/list',
    GetCellList2: myExpressURL + '/api/cell/getcell',
    DeleteCellList: myExpressURL + '/api/cell/deletecell',
    UpdateCell: myExpressURL + '/api/cell/updatecell',

    //inmates
    AddInmate: myExpressURL + '/api/inmate/addinmate',
    GetInmateList: myExpressURL + '/api/inmate/list',
    DeleteInmateList: myExpressURL + '/api/inmate/deleteinmate',
    UpdateInmate: myExpressURL + '/api/inmate/updateinmate',
    InmateCode: myExpressURL + '/api/inmate/code',


    // RecordList
    RecordList: myExpressURL + '/api/record/list',
    RecordInmateName: myExpressURL + '/api/record/inmatename',



}



//format the string --remove the double whitespace --Capitalize each word and lower case the other letter
export const formatString = (str) => {
    return str.toLowerCase().replace(/\b\w/g, function (c) {
        return c.toUpperCase();
    }).replace(/\s+/g, ' ').trim();
}
export const formatDate = (dateString) => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${hours}:${minutes} | ${monthName} ${day}, ${year}`;
    return formattedDate;
}


export const localhost = 'http://localhost:5173'

export const inmateName = (name) => {
    const names = name;
    return names;
}

