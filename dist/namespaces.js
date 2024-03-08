// existen pero los modulos los reemplazan
// 
var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User('joker');
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUer = new DatabaseEntity.User('j03r2');
console.log(myOtherUer);
/// <reference path="./namespace.ts" />
var myUser = new DatabaseEntity.User('j0k3r.rg');
console.log(myUser);
