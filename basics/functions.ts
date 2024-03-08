const sayHi = (name : string) : void => {
    console.log(`Hi ${name}`);
}

sayHi('george');

function sayGoodBye(name : string) : void{
    console.log(`Good bye ${name}`);
}

sayGoodBye('george');

function show() : number{
    console.log('executint while return number 0');
    return 0;
}

const num : number = show();

console.log(`value var show ${num}`);

function sumNums(nums : number[]) : number{
    let total = 0;
    nums.forEach(num => total+= num);
    return total;
}

console.log(sumNums([1,2,3,4,5,6,7,8,9,10]));

type Res = {
    id : string;
    name : string;
    age : number;
}

const showId = ({id,name} : Res):void =>{
    console.log(`el nombre ${name} tiene el id ${id}`);
}

showId({id: '123', name: 'joker', age: 33});
