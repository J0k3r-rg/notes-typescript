var my_interface = {
    field: 'my_field'
};
var my_interface_user = {
    field: {
        name: 'joker',
        age: 33
    }
};
console.log("interface: ".concat(my_interface));
console.log("field: ".concat(my_interface.field));
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var my_class_string = new MyClass('my_field');
var my_class_number = new MyClass(15);
function getData(id) {
}
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: 'joker'
    };
};
var fetchTask = function () {
    return {
        id: 1,
        name: 'buy bread',
        isImportant: true
    };
};
var myUser = fetchUser();
var myTask = fetchTask();
var res = new HttpResponse(myUser, 200, 2);
console.log(res);
var res2 = new HttpResponse(myTask, 200, 2);
console.log(res2);
////////////////////////////////////////////
var CRUD = /** @class */ (function () {
    function CRUD(data) {
        this.data = data;
    }
    CRUD.prototype.addItem = function (item) {
        this.data.push(item);
    };
    CRUD.prototype.deleteItem = function () {
        this.data.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.data;
    };
    return CRUD;
}());
var users = [
    {
        id: 1,
        name: 'joker'
    }, {
        id: 2,
        name: 'queen'
    }, {
        id: 3,
        name: 'j&q'
    }
];
var userCrud = new CRUD(users);
console.log('adding item....');
userCrud.addItem({
    id: 4,
    name: 'itemAdd'
});
console.log('--------------------------------------');
console.log(userCrud.printItems());
userCrud.deleteItem();
console.log('delete item...');
console.log('--------------------------------------');
console.log(userCrud.printItems());
