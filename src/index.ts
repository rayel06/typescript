const person = {
    name : "nicolas",
    gender: "male",
    age:22
}

const sayHi =(name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

sayHi("ysh",26,"male");

    export {};