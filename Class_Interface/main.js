var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = function (id, name, dept, city) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
};
Employee.prototype.writeDept = function () {
    console.log("".concat(this.name, " works in ").concat(this.dept));
};
var salesEmployee = new Employee('kkarmega', 'Kannan Karmegam', 'Marketing', 'Darwin');
var data = [
    { id: 'bsmith', name: 'Bob Smith', city: 'London' },
    { id: 'ajones', name: 'Andrew Jones', city: 'Brisbane' },
    { id: 'sjules', name: 'Samantha Jules', city: 'Sydney' },
    { id: 'gsmith', name: 'Glenn Smith', city: 'xxx' },
    salesEmployee,
];
data.forEach(function (item) {
    if ('dept' in item) {
        item.writeDept();
    }
    else {
        console.log("".concat(item.id, " ").concat(item.name, ", ").concat(item.city));
    }
});
//USING CLASSES
var BestEmployee = /** @class */ (function () {
    function BestEmployee(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    BestEmployee.prototype.writeDept = function () {
        console.log(" print from a class ---> $(this.name) works in $(this.dept)");
    };
    return BestEmployee;
}());
var BestEmployee2024 = new Employee('E100', 'Kannan', 'Karmegam', 'Digital Solutions');
console.log(BestEmployee2024);
//CLASS INHERITANCE
var Animal = /** @class */ (function () {
    function Animal(name, tag, weight) {
        this.name = name;
        this.tag = tag;
        this.weight = weight;
    }
    Animal.prototype.getGeographicLocation = function () {
        return 'australia';
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name, tag, weight) {
        return _super.call(this, name, tag, weight) || this;
    }
    dog.prototype.getGeographicLocation = function () {
        return 'xx';
    };
    return dog;
}(Animal));
//abstract class
var Superhero = /** @class */ (function () {
    function Superhero(id, name) {
        this.id = id;
        this.name = name;
    }
    Superhero.prototype.getProfile = function (id) {
        console.log("super hero id is ".concat(id));
    };
    return Superhero;
}());
var Spiderman = /** @class */ (function (_super) {
    __extends(Spiderman, _super);
    function Spiderman(id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Spiderman.prototype.getUniqueSkill = function () {
        console.log("".concat(this.name, " unique talent is spider web"));
    };
    return Spiderman;
}(Superhero));
var drStrange = /** @class */ (function (_super) {
    __extends(drStrange, _super);
    function drStrange(id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    drStrange.prototype.getUniqueSkill = function () {
        console.log("".concat(this.name, " unique talent is laser guns"));
    };
    return drStrange;
}(Superhero));
var superheroData = [
    new Spiderman('spider', 'Spiderman'),
    new drStrange('drs', 'Dr Strange'),
];
superheroData.forEach(function (item) { return console.log(item.getUniqueSkill()); });
var Earth = /** @class */ (function () {
    function Earth(name, size, distanceFromSun) {
        this.name = name;
        this.size = size;
        this.distanceFromSun = distanceFromSun;
        //no statement required
    }
    Earth.prototype.getDetails = function () {
        return "".concat(this.name, " is ").concat(this.distanceFromSun, " Million Kilometers away from sun");
    };
    return Earth;
}());
var Mars = /** @class */ (function () {
    function Mars(name, size, distanceFromSun) {
        this.name = name;
        this.size = size;
        this.distanceFromSun = distanceFromSun;
    }
    Mars.prototype.getDetails = function () {
        return "".concat(this.name, " is ").concat(this.distanceFromSun, " Million Kilometers away from sun");
    };
    return Mars;
}());
var x = new Earth('Earth', BigInt(143242340), BigInt(1234234230));
console.log(x.getDetails());
//Generic Types - abstraction
function getFirstElement(array) {
    return array[0];
}
var numbers = [1, 2, 3];
var strings = ['asda', 'asdsad', 'asdasd'];
console.log('--start generics--');
console.log(getFirstElement(numbers));
console.log(getFirstElement(strings));
//improved version
function getFirstElement1(array) {
    return array[0];
}
var numbers1 = [100, 200, 300];
var strings1 = ['First', 'Second', 'Third'];
console.log(getFirstElement1(numbers1));
console.log(getFirstElement1(strings1));
var response = {
    data: { name: 'kannan', age: 30 },
    isError: true,
};
console.log(response);
//--------------------------------------------------------------------------
function removeOrders(arr) {
    arr.shift();
    return arr;
}
console.log('another generics example');
console.log(removeOrders([100, 101, 102]));
console.log(removeOrders(['burger', 'soda', 'chips']));
