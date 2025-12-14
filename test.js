let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollars) {
    let euro = valueInDollars / oneEuroIs.USD;   //  de USD a EUR
    let valueInYens = euro * oneEuroIs.JPY;       //  de EUR a JPY
    return valueInYens;
}


const fromYenToPound = function (valueInYen) {
    let euro = valueInYen / oneEuroIs.JPY;   //  de JPY a EUR
    let valueInYens = euro * oneEuroIs.GBP;       //  de EUR a GBP
    return valueInPounds;
}


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("Dollar to Yen should be the result of (1 / 1.07) * 156.5", function(){
    const { fromDollarToYen } = require('./app.js')

    const euro = 1 / 1.07

    const yens = fromDollarToYen(1);

    const expected = (1 / 1.07) * 156.5 ;

    expect(fromDollarToYen(1)).toBeCloseTo(146.261);
})


test("Dollar to Yen should be the result of (1 / 156.5) * 0.87", function(){
    const { fromYenToPound } = require('./app.js')

    const euro = 1 / 156.5

    const yen = fromYenToPound(1);

    const expected = (1 / 156.6) * 0.87 ;

    expect(fromYenToPound(1)).toBeCloseTo(0.005);
})