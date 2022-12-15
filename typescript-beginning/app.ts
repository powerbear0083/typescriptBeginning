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

function fn(a: string | number): boolean {
if (typeof a === "string") {
    return true;
} else if (typeof a === "number") {
    return false;
}  
// make the function valid
return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
} 

function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

add(true, false);

const add2 = (x: number, y: number): number => {
    return x + y
}

let add3: (x: number, y: number) => number;

add3 = function (x: string, y: string): number {
    return x.concat(y).length;
};

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

let promotion: (price: number, discount: number) => number;

promotion = function(price = 0, discount = 0.5) {
    return price * discount
}


function applyDiscount(price: number, discount?: number): number {
    let result = 0
    if(discount) {
        result = price * (1 - discount);
    }
    return result
}

let applyDiscount2: (price: number, discount?: number) => number;
applyDiscount2 = function applyDiscount(price = 0, discount = 0.5): number {
  let result = 0
  if(discount) {
      result = price * (1 - discount);
  }
  return result
}

class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}

let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); 

class Person2 {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
let person2 = new Person2(new Date(1990, 12, 25));
person2.birthDate = new Date(1991, 12, 25); 
