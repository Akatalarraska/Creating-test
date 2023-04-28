const {fromDollarToYen , fromEuroToDollar, fromYentoPound} = require('./app.js');

test("One euro should be 1.20 dollars", function(){   
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.20); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("5 dolares deberían ser 532.92", function(){
    expect(fromDollarToYen(5)).toBe(532.92);
})

test("1000 yens deberían ser 6.25", function(){
    expect(fromYentoPound(1000)).toBe(6.25);
})

test("1000 yens no deberían ser 20", function(){
    expect(fromYentoPound(1000)).not.toBe(20);
})




/*const {suma} = require('./app.js');

test('adds 14 + 9 to equal 23' ,() =>{
    let total = suma(14,9);

    expect(total).toBe(23);
});

test('adds 5 + 7 to equal 12' ,() =>{
    let total = suma(5,7);

    expect(total).toBe(12);
});
*/