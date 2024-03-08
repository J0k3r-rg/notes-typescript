type Person = {
    name : string;
    code : number | string;
    description? : string;
};

const person : Person = {
    name : 'joker',
    code : '01',
};

let response : string | null | number | undefined;

type ServiceResponse = string | null | number | undefined;

let response2 : ServiceResponse;

type UserCarges = 'admin' | 'normal' | 'superUser' | undefined;

let user : UserCarges;

