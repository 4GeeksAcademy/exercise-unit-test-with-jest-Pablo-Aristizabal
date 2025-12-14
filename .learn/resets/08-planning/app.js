/* This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}*/
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;   //  de USD a EUR
    let yen = euros * oneEuroIs.JPY;       //  de EUR a JPY
    return yen;
}


function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}


function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;   //  de JPY a EUR
    let pounds = euros * oneEuroIs.GBP; //  de EUR a GBP
    return pounds;
}



/*// Just a console log for ourselves
console.log(sum(7,3))*/

/*// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };*/