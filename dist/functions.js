var sayHi = function (name) {
    console.log("Hi ".concat(name));
};
sayHi('george');
function sayGoodBye(name) {
    console.log("Good bye ".concat(name));
}
sayGoodBye('george');
function show() {
    console.log('executint while return number 0');
    return 0;
}
var num = show();
console.log("value var show ".concat(num));
function sumNums(nums) {
    var total = 0;
    nums.forEach(function (num) { return total += num; });
    return total;
}
console.log(sumNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
var showId = function (_a) {
    var id = _a.id, name = _a.name;
    console.log("el nombre ".concat(name, " tiene el id ").concat(id));
};
showId({ id: '123', name: 'joker', age: 33 });
