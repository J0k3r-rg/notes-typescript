enum Users{
    NORMAL_USER = 5 ,
    PAYED_USER = 7,
    ADMIN_USER = 9,
    MEGA_USER = 11
}

enum Users2{
    NORMAL_USER = '5' ,
    PAYED_USER = 'user',
    ADMIN_USER = 'admin',
    MEGA_USER = 'mega'
}

const my_user = Users.ADMIN_USER;
console.log(my_user)

const my_user2 = Users2.ADMIN_USER;
console.log(my_user2)

