var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hat = ['This is text', 200];
hat.forEach(function (h) {
    if (typeof h === 'string') {
        console.log("string: ".concat(h));
    }
    else {
        console.log("int: ".concat(h.toFixed(2)));
    }
});
var gloves = ['Gloves', 75];
var products = [
    ['Hat', 100],
    ['Gloves', 75],
];
var tupleUnion = __spreadArray([true, false, hat], products, true);
tupleUnion.forEach(function (elem) {
    if (elem instanceof Array) {
        var str = elem[0], num = elem[1];
        console.log("Name: ".concat(str));
        console.log("Price: ".concat(num.toFixed(2)));
    }
    else if (typeof elem === 'boolean') {
        console.log("Boolean Value: ".concat(elem));
    }
});
//enums
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log("Price for ".concat(product, ": $").concat(price.toFixed(2)));
}
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
var newProducts = [
    [Product.Hat, 200],
    [Product.Gloves, 75],
];
newProducts.forEach(function (prod) {
    switch (prod[0]) {
        case Product.Hat:
            writePrice('Hat', calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice('Gloves', calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice('Umbrella', calculateTax(prod[1]));
            break;
    }
});
//literal values
var restrictedValue = 3; //nice... these values are allowed...room potu think pannirukanunga
console.log("Literal Value: ".concat(restrictedValue));
//literal value types in function
function calculatePrice(quantity, price) {
    return quantity * price;
}
var total = calculatePrice(2, 19.99);
console.log("value type in function -- Price: ".concat(total));
