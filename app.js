// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen =(dollars) =>{
    const yens = dollars * oneEuroIs.JPY / oneEuroIs.USD;
    return parseFloat(yens.toFixed(2));
};


const fromEuroToDollar=(euros) => {
    const dollars = euros *oneEuroIs.USD;
    return parseFloat(dollars.toFixed(2));
};


const fromYentoPound =(yens) =>{
    const pounds = yens * oneEuroIs.GBP / oneEuroIs.JPY;
    return parseFloat(pounds.toFixed(2));
};

console.log(fromYentoPound(1000));
console.log(fromDollarToYen(5));
console.log(fromEuroToDollar(3.5));

module.exports = {fromDollarToYen , fromEuroToDollar, fromYentoPound, fromEuroToDollar};

/*
const suma = (a, b) => {
    return a + b 
}
module.exports = {suma};
*/