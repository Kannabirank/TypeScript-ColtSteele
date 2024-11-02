var mat = { name: 'Mat', price: 100 };
var pillow = { name: 'Pillow', price: 75 };
var homeProducts = [mat, pillow];
homeProducts.forEach(function (prod) { return console.log("".concat(prod.name, ": ").concat(prod.price)); });
//use type to give name to shape
var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
var math = { id: '8M4', name: 'algebra' };
var science = { id: '8S4', name: 'big bang theory' };
var sara = { id: 'sara111', name: 'Olivia', className: 'Y8S4' };
var rosana = { id: 'rosana111', name: 'Rosana', className: 'Y8S5' };
var dataItems = [math, sara];
dataItems.forEach(function (item) { return console.log("ID:".concat(item.id, ", Name:").concat(item.name)); });
