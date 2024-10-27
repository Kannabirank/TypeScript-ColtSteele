// learned from essential typescript A-press book
function calculateTax(amount) {
    return amount * 1.2;
}
var taxValue = calculateTax(150);
console.log("Total Amount: ".concat(taxValue));
//with optional parameters
function calculateTax2(amount, discount) {
    return amount * 1.2 - (discount || 0);
}
var taxValue2 = calculateTax2(150, 10);
console.log("Total Amount 2: ".concat(taxValue2));
//with default parameters value
function calculateTax3(amount, discount) {
    if (discount === void 0) { discount = 0; }
    return amount * 1.2 - discount;
}
var taxValue3 = calculateTax3(160, 10);
console.log("Total Amount 3: ".concat(taxValue3));
//Rest parameters.. it should be the last parameter
function calculateTax4(amount, discount) {
    if (discount === void 0) { discount = 0; }
    var extraFees = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraFees[_i - 2] = arguments[_i];
    }
    return (amount * 1.2 - discount + extraFees.reduce(function (total, val) { return total + val; }, 0));
}
var taxValue4 = calculateTax4(150, 10, 20, 10, 10, 10, 10);
console.log("Total Amount 4: ".concat(taxValue4));
//tsconfig null implicit checks
var taxValue5 = calculateTax4(null, 0);
console.log("Total Amount (null parameter): ".concat(taxValue5));
//function overload
function calculateTax5(amount) {
    return 0;
}
function calculateTax5(amount) {
    return null;
}
