let message: string = 'Hello, TypeScript!!!!!EEEEEEEEE';
let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

const headingTag = document.querySelector('h1');

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let numbers: number[] = [1, 2, 3];


let greeting : (name: string) => string;

greeting = function () {
    console.log('Hello');
    return 'Hello';
};


let vacant: {} = {};

console.log(vacant.toString());

let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];

let scores : (string | number)[] = ['Programming', 5, 'Software Design', 4];

let skill: [string, number] = ['Programming', 5];


let useless: void = null;

