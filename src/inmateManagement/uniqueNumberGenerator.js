


export const generateUniqueNumber = () => {
    let uniqueNumber = '';
    while (uniqueNumber.length < 7) {
        uniqueNumber += Math.floor(Math.random() * 10); // generate a random digit between 0 and 9
    }
    return uniqueNumber;
}