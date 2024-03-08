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
var Animal = /** @class */ (function () {
    function Animal(name, age, identity) {
        this.name = name;
        this.age = age;
        this.identity = identity;
    }
    Animal.prototype.sayHi = function () {
        console.log("Hi, this age is: ".concat(this.age));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, identity) {
        return _super.call(this, name, age, identity) || this;
    }
    Dog.prototype.sayHi = function () {
        console.log("Guau!!, I am a dog");
    };
    Dog.prototype.sayId = function () {
        console.log(this.identity);
    };
    return Dog;
}(Animal));
var myAnimal = new Animal('', 0, '');
myAnimal.sayHi();
var myDog = new Dog('', 0, '');
myDog.sayHi();
myDog.sayId();
