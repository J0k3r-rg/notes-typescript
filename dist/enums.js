var Users;
(function (Users) {
    Users[Users["NORMAL_USER"] = 5] = "NORMAL_USER";
    Users[Users["PAYED_USER"] = 7] = "PAYED_USER";
    Users[Users["ADMIN_USER"] = 9] = "ADMIN_USER";
    Users[Users["MEGA_USER"] = 11] = "MEGA_USER";
})(Users || (Users = {}));
var Users2;
(function (Users2) {
    Users2["NORMAL_USER"] = "5";
    Users2["PAYED_USER"] = "user";
    Users2["ADMIN_USER"] = "admin";
    Users2["MEGA_USER"] = "mega";
})(Users2 || (Users2 = {}));
var my_user = Users.ADMIN_USER;
console.log(my_user);
var my_user2 = Users2.ADMIN_USER;
console.log(my_user2);
