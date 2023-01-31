# TypeScript  簡單心得

[TypeScript Tutorial](https://www.typescripttutorial.net/)

## 建立 tsconfig

[tsconfig 說明](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)
```
tsc --init
```

---

## tsc compiler 出現錯誤

[TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/) 看這個教學，在使用 tsc 這個名命出現以下錯誤

```
tsc hello.ts
```

```
PS D:\WorkDocument\practice\TypescriptBeginning> tsc app.ts
error TS6053: File 'app.ts' not found.
  The file is in the program because:
    Root file specified for compilation

```

### 解決方法

1. 新增一個資料夾，並將要 compiler 的檔案放到該資料夾內
2. command line 切換到該資料夾
3. 執行 tsc app.ts 即可

---

## TS 底下的型別

分為兩種
* 原始型別 ( Primitive types )
* 物件型別 ( Object types )

### TypeScript 型別的目的

* 編譯時期就能發現程式碼的錯誤
* 讓你更了解變數和值得關連


### HTMLHeadingElement type

* 使用 qerySelector 取得的元素型別為 HTMLHeadingElement
```
const headingTag = document.querySelector('h1');
```

---

## Typescript annotation 型別註解、型別註記

typescript 使用型別註記 ( type annotations )的方式，來明確的標示 variables、function、object 的型別


### 變數宣告方式

```
let counter: number;
counter = 1;
counter = 'Hello'; // compile error 

// 可以同時宣告型別和初始值
let counter: number = 1;
```

### primitive type 原始型別的宣告方式

```

let name: string = 'John';
let age: number = 25;
let active: boolean = true;

```

## Type annotation examples

### Arrays

```

let arrayName: type[];
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let numbers: number[] = [1, 2, 3];

```

### Objects

```
let person: {
   name: string;
   age: number
};

person = {
   name: 'John',
   age: 25
};
```

### Function arguments & return types

#### Function expression example 函式陳述式

```
let greeting : (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};

// 這個會報錯的原因是因為沒有回傳字串回去
greeting = function () {
    console.log('Hello');
};

```

#### Function declaration  example 函式運算式

也可以使用下列的方式定義 function declaration 的回傳方式
```
function add(x: number, y: number): number {
  return x + y;
}

```

#### 使用 interface 定義有回傳值的 function 型別

* 這樣的寫法跟 Net 的 interface 類似，先定義 method ，然後再實作方法
* 定義 function getProduct 的型別

```
interface Product{
    id: number,
    name: string,
    price: number
};
```

* 指定 getProduct 的型別

```
function getProduct(id) : Product{
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}
```

## Type inference 型別推論

型別推論是指，當你的變數沒有明確的指名是那種型別的時候，typescript 會自動推論出變數的型別

```
let counter = 0;
// 上面寫法等同下面寫法
let counter: number = 0;

// 同樣的如果 function 的預設參數有給預設值，typescript 也會自動推論出型別
function setCounter(max=100) {
    // ...
}

// 如果 function 沒有宣告回傳值，這個範例 typescript 也會自動推論出型別
function increment(counter: number) {
    return counter++;
}

// 這個範例等同上個範例
function increment(counter: number) : number {
    return counter++;
}
```

### 通用型別

typescript 會把下面這種陣列推論為 number[]
```
let items = [1, 2, 3, null];
```
如果陣列有數字和字串， 會陣列推論為 (number | string)[]
```
let items = [0, 1, null, 'Hi']
```

### Contextual typing 依據上下文推論型別

這個案例 typescript 會知道 event 是 MouseEvent
```
document.addEventListener('click', function (event) {
    console.log(event.button); // 
});
```
如果把 click 換成 scroll 會報錯，因為 scroll 事件沒有 button 屬性
```
document.addEventListener('scroll', function (event) {
    console.log(event.button); // 
});
```

### Type inference (型別推論) vs. Type annotations (型別註記)

* Type inference TS 自己推斷 變數、陣列、function 是什麼型別
* Type annotations RD 明確告知 TS 是什麼型別

---

## TypeScript Number

* 在 TS 中 Number 有可能是兩種數值，浮點數  ( floating-point values ) 或 big intergers

### 數字宣告方式

```
let price: number;
```

### Decimal numbers 十進制

```
let counter: number = 0;
let x: number = 100;
let y: number = 200;
```

### Binary  numbers 二進制

```
let bin = 0b100;
let anotherBin: number = 0B010;
```

### Octal Numbers 八進制

```
let octal: number = 0o10;
```


### Hexadecimal numbers 十六進制

```
let hexadecimal: number = 0XA;
```

### Big Integers 大整數

```
let big: bigint = 9007199254740991n;
```
---
## TypeScript String

### String 定義方式

```
let firstName: string = 'John';
let title: string = "Web Developer";
```
---

## TypeScript Boolean

### Boolean 定義方式

```
let pending: boolean;
pending = true;
```
---

## TypeScript object Type

在 TS 中物件型別，就不屬於原始 (primitive types) 型別 

### primitive types

* number
* bigint
* string
* boolean
* null
* undefined
* symbol

### 物件型別宣告

```
// example 1
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// example 2
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// example 3
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// 讀取不存在的 property 在 TS 中會報錯
// 在 JS 會回傳 undefined
console.log(employee.hireDate);
```

### object vs. Object 大小寫物件的差別

* object 表示為 non-primitive values
* Object 表示為 functionality of all objects
  * 表示 Object 有 toString() and valueOf() 可以存取

### The empty type {}

```
let vacant: {};
vacant.firstName = 'John'; // ts 會報錯

```

---

## TypeScript array type

### 基本宣告

* 宣告回資料型別的 Array

```
let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];
skills.push(100); // ts 會報錯， Argument of type 'number' is not assignable to parameter of type 'string'.
```

* 陣列多種型別宣告
  
```
  let scores : (string | number)[] = ['Programming', 5, 'Software Design', 4];

scores = ['Programming', 5, 'Software Design', 4];
```

## TypeScript Tuple 元組（Tuple） 型別

* 元組（Tuple）合併了不同型別的物件
* 用法類似 array 但是要多考慮一些額外的因素
* 元祖的元素數量是固定的
* 元祖的型別是已知的，但是不必相同

### Tuple example

```
let skill: [string, number] = ['Programming', 5];
```

* 值得順序對 Tuple 來說很重要，輕易改變順序的話會報錯

```
let skill: [string, number];
skill = [5, 'Programming']; // error TS2322: Type 'string' is not assignable to type 'number'.
```

### Optional Tuple Elements

* 使用 ? 運算子來表示，是否為選填值

```
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

## TypeScript Enum type

* 列舉的值都是常數


### TypeScript enum type example

```
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

//  使用方式

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
```

## TypeScript any Type

* 使用 Type 型別允許你在 compile time 不需要檢查型別

### TypeScript any vs. object

* 這樣寫不會報錯
  
```
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); //
```

* 這樣寫會報錯
  
```
let result: object;
result = 10.123;
result.toFixed();
```


## TypeScript void Type

* void type 跟 any type 有點像
* 通常用在沒有 return 任何值得 funciton

```
function log(message): void {
    console.log(messsage);
}
```

* 使用 void 的好處：可以不用讀完整個 function 就可以知道 function 沒有回傳任何值
* 當宣告一個變數為 undefined 的時候，可以使用 void

```
let useless: void = undefined;
```

## TypeScript never Type

* never Type 表示不包含任何值
* never type 也不可以 assign 值
* 通常用來讓 function 拋出 error 用

```
function raiseError(message: string): never {
    throw new Error(message);
}
```

* TS 會自己判斷為 never type
```
function reject() { 
   return raiseError('Rejected');
}
```

* 以下範例，當 fn 沒有 return 值回去， fn 會報錯

```
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }   
}
```

* 改成下面寫法就不會報錯

```
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
```

## TypeScript union Type

* union type 讓你的變數儲存一至多個型別
* union type 允許你連結多個型別

```
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```


## TypeScript Type Aliases 型別別名

* type aliases 允許創造一個新的變數名稱，並將一個新變數的型別指派給已存在的型別

```
type chars = string;
let message: chars; // same as string type

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```

## TypeScript String Literal Types

* string literal types 允許將字串定義成 types
* click 重新 assign 'click' 是有效的
* 但是重新 assing 成變得名字會報錯
```
let click: 'click';

click = 'click'; // valid
click = 'dblclick'; // compiler error

```

* 和 union type 一起運用，會有很好的搭配效果
  
```
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MouseEvent;
```

## TypeScript Functions

* 和 JS 不同的地方，TS function 中的傳入參數和回傳值都要定義型別

### example

* 下面這個範例表示 add 傳入的兩個參數的型別都是 number
* add 這個 method 的回傳值，被定義為 number

```
function add(a: number, b: number): number {
  return a + b;
}
```

* 如果 function 不回傳任何值可以使用 void

```
function echo(message: string): void {
    console.log(message.toUpperCase());
}
```

## TypeScript Function Types

* function 分成兩個部分，一個是參數 (parameter) 型別，一個是回傳 (return) 型別


* 下面的範例 function 中的參數型別都是 number
* function 的回傳參數型別為 number，可以用  => 來表示型別
```
// 先定義 function 型別
let add: (x: number, y: number) => number;

// 再寫 function
add = function (x: number, y: number) {
  return x + y;
};

// 也可以這樣寫
let add: (a: number, b: number) => number =
  function (x: number, y: number) {
      return x + y;
  };

// 箭頭函式範例
const add2 = (x: number, y: number): number => {
  return x + y
}
```

## TypeScript Optional Parameters

* TS 中選填參數用法
* 使用 ? 來表示選填參數

```
function multiply(a: number, b: number, c?: number): number {

  // 如果參數是選填的話，要有判斷防呆的邏輯，不然會報錯
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

## TypeScript Default Parameters

* TS 預設參數寫法

```
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
```

* 這種預設參數的寫法會報錯
  
```
let promotion: (price: number, discount: number = 0.05) => number;

// 這樣寫就不會報錯
let promotion: (price: number, discount: number) => number;

promotion = function(price = 0, discount = 0.5) {
    return price * discount
}

```

##　Default parameters and Optional parameters

* example 1
```
function applyDiscount(price: number, discount?: number): number {
  let result = 0
  if(discount) {
      result = price * (1 - discount);
  }
  return result
}
```

* example 2

```
let applyDiscount2: (price: number, discount?: number) => number;
applyDiscount2 = function applyDiscount(price = 0, discount = 0.5): number {
  let result = 0
  if(discount) {
      result = price * (1 - discount);
  }
  return result
}
```

## TypeScript Rest Parameters

### TypeScript rest parameter 使用規則

* 一個 function 只能有一個 rest parameter
* rest parameter 必須在 function 的最後一個
* rest parameter 是一個 array type

#### example

```
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```

## TypeScript Function Overloadings 函式多載或方法多載

* TS 的 overloading 和 C# and Java 不同
* 在 TypeScript 中，函數重載允許您在函數的參數類型和結果類型之間建立關係。

### example

* 寫一個共用 funtion， 可以 return  a + b 的 value
* 可以利用 union type 來達到目的
* 但是 union type 不能從參數和回傳值看出互相依賴的關係
```
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
}
```

### improve example

```
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

// 和選填參數一起使用
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
```

### class example

```
class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
          values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
```
## TypeScript Class

### ES5 Class example

```
// 建立一個 Person class
function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}

// 使用 prototype 定義一個 method
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// 調用 new Person
let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());
```

### ES6 Class example

```
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
      return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());
```

### TS Class example

* class 底下的  property, constructor, method 都需要定義型別
  
```
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
  }

  getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}
```

## TypeScript Access Modifiers

TS 中的 Class 有三種方式可以修改訪問 properties and methods 

* private
* protected
* public

https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/

### The private modifier

有 private modifier 的 property 和 method 只能在同一個 class 內被 access
底下範例 constructor 可以 access private ssn
如果直接 access ssn 會報錯

```
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
console.log(person.ssn); // compile error
```

### The public modifier

```
class Person {

  // 這個寫法跟下面的寫法，效果相同
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`; 
  }


  getFullName(): string {
    return `${this.firstName} ${this.lastName}`; 
  }
}
```

### The protected modifier

protected modifier 允許 properties and methods 在同一個 class 被 access
但是不能被 subclass access 
當一個 class(child class) 繼承自另一個 class (parent class)，如果 subclass 
試圖 access parent class 的 protected properties or methods ，這時候 TS 就會報錯

```
class Person {

  protected ssn: string;
  
  // other code
}

class Person {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

## TypeScript readonly

TS 提供 readonly modifier 允許你宣告 class 中不可變的 properties 
宣告為 readonly 的 property 會作用在兩個地方\

* 宣告 property 指定為 readonly
* 同個 class 底下的 constructor

```
class Person {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

// Compile error
let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25);
```
### readonly 另一個宣告方式
```
class Person {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}
```

## TypeScript Inheritance

繼承 (inheritance) 是指 child class 繼承 parent class 的 properties and methods

```
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
```

Employee 使用 extends Person
使用 super 調用 parent class 的 constructor
透過繼承就可以使用 parent class 的 method
```
class Employee extends Person {
  private jobTitle: string
  constructor(
    firstName: string,
    lastName: string,
    jobTitle: string) {
    
    // call the constructor of the Person class:
    super(firstName, lastName);
  }

  // 如果你想複寫 parent class 的 describe
  // 在自己的 class 底下，重新寫一個 describe 

  describe(): string {
      // 可以透過 super 的方式調用 parent class 的 describe
      return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee('John','Doe','Front-end Developer');
let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());
```

## TypeScript Static Methods and Properties

### Static properties

```
class Employee {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string) {

    Employee.headcount++;
  }
}

let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
```


### Static methods

```
class Employee {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}

let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount);
```

## TypeScript Abstract Classes 抽象類別

抽象類通常用來定義常用的行為，一般的 class 不一樣的地方，是  abstract class 不能直接 new
通常，抽象類型會包含一個或多個抽象 methods

抽象　methods 通常部會不含實作 (implementation)，只會定義 method 名稱在 class 內
抽象 methods 必須在 new 的  class 去實作 method

```
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
```

Employee class 是一個抽象類別，不能直接 new

Employee class 要這樣使用才行
且 getSalary 在 Employee 是一個抽象 method，需要在這裡實作 getSalary 才能執行

```
class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
```

另一個範例

```
class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());

John Doe makes 12000 a month.
Jane Doe makes 16000 a month.
```

## TypeScript Interface

* interface 定義程式碼接口

* 下面這種傳入參數型的寫法比較難閱讀
```
function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person));
```

* 可以改成使用 interface
* interface 的名稱使用大駝峰命名方式 ，For example, Person, UserProfile, and FullName.
```
interface Person {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));
```

### Optional properties 選填屬性

* 使用 ? 表示為選填參數

```
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

```

### Readonly properties

* 設定 readonly 之後值無法再變動
```
interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}

let person: Person;
person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}
```


### Function types

* 如何在 interface 中定義 function 型別

#### example

```
interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

```

* function 傳入的名稱可以和 interface 不一樣 (個人覺得這樣不好)
* 下面的例子等同上面的例子
```
let format: StringFormat;

format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));
```

* 沒有傳第二個參數也可以 work

```
let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
}

console.log(lowerCase('Hi', false));
```

### Class Types

* 下面 interface 的範例，比較像 C# interface 的用法

* 先定義好要實作的 method
```
interface Json {
   toJSON(): string
}
```

* 接著實作 method

```
class Person implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
    toJson(): string {
        return JSON.stringify(this);
    }
}

let person = new Person('John', 'Doe');
console.log(person.toJson());
```

## How to Extend Interfaces in TypeScript

* 繼承讓你的原本的 interface 不會破壞目前的 interface

### 一開始的 interface

```
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}
```

### 如果要新增一個 method 可以使用 extends
* 這樣就不會破壞原本的 interface
* FutureMailable 繼承 Mailable ，FutureMailable 就會包含自己原本的 method 和 Mailable 的 method

```
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
```
* 之後實際的 class 在實作 FutureMailable 的 method
  
```
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
```

### Interfaces extending classes

* interface 只可以繼承私有和受保護的 properties  和 method，公開的不行


```
class Control {
    private state: boolean;
}

// StatefulControl 繼承 Control
interface StatefulControl extends Control {
    enable(): void
}

// Button 繼承 Control，實作 StatefulControl 的 enable 的 method
class Button extends Control implements StatefulControl {
    enable() { }
}

// TextBox 繼承 Control，實作 StatefulControl 的 enable 的 method
class TextBox extends Control implements StatefulControl {
    enable() { }
}


class Label extends Control { }

// 沒有繼承 Control 直接實作 StatefulControl 會報錯ㄇ
// Error: cannot implement
class Chart implements StatefulControl {
    enable() { }

}
```

## TypeScript Intersection Types (交集型別)

* intersection Types 指建立一個新的型別並結合多個已存在的型別

* 先定義三個 interface
```
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}
```

* 建立 Employee 與 Customer
```
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```


```
type Employee = Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
```

```
type Customer = BusinessPartner & Contact;

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
```

* 如果要實作 Employee 可以這樣寫
  
```
type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};
```

## TypeScript Type Guards (型別保護)

### 先看個範例
* 下面這個 add method 接受兩個參數，參數分別可傳入 string or number

```
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
```


### instanceof

### 另一個範例

* 宣告兩個 class
* 建立 BusinessPartner union type
* 再建立一個 signContract method 接受一個 partner 參數型別為 BusinessPartner
* 最後在 signContract 內部的判斷式使用 instanceof 去判斷為那種型別

```
class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}
// 上面的範例可以改寫成這樣

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
}

```

### in

* 也可以使用 in operator 改寫上面的範例
  
```
function signContract(partner: BusinessPartner) : string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}
```

### User-defined Type Guards

*  Type Guards 可以幫助 TS 在面對 function 的時候去推斷傳進來的參數的型別

```
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContract(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}
```

## Type Casting 型別轉換

* 在 TS　中允許一個變數的型別轉換型另一個型別。
* TS 中可以使用 as 這個 keyword  or <> 這個 operator 做型別轉換
   

### Type casting using the as keyword 

```
let input = document.querySelector('input["type="text"]');

// 這個會報錯，因為 querySelector 回傳的是一個  HTML Element
// 所以 input 的 HTMLInputElement value 不存在，因此報錯
console.log(input.value);
```

### Resolve example

* 使用 as keyword 將型別改成 HTMLInputElement，這樣就不會報錯
```
let input = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input.value);
```

### another example 1

```
let enteredText = (input as HTMLInputElement).value;
```

### another example 2

```
let el: HTMLElement;
el = new HTMLInputElement();
```

### Type Casting using the <> operator

* 可以使用  <> operator 轉換型別
  
```
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);
```

## Type Assertions

* Type Assertions 是指 TS 在 compiler 的時候要對待某個值，指定其型別 
* 使用 as keyword

```
expression as targetType
```

### example

```
function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

// 透過 Type Assertions as 的關鍵字，執行 getNetPrice 這個 method 並將 netPrice 的型別設為 string
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice); // $95

// 另一個範例，可以將 netPrice 的型別設為 number
let netPrice = getNetPrice(100, 0.05, false) as number;
console.log(netPrice); // 95
```

### 替代語法

* 有些 react 的 libraies 不能使用 <> 這個語法，建議使用 as 這種語法
```
<targetType> value
```

```
let netPrice = <number>getNetPrice(100, 0.05, false);
```
## TypeScript Generics 泛型

https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
* TS 的泛型讓你可以撰寫可覆用和通用的 function, class, interface
* 在 TS 中想要撰寫可共用多種型別的 function ，可以使用泛型來撰寫


### example 1

* 寫一個會產生亂數數值的 method

```
function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));
```

* 假設有另一個需求，需要產生亂數字串

```
function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));
```

### generics example

* 使用 T 來表示泛型型別
* T 允許在 function 被調用的時候去捕獲型別
* getRandomElement 這時就可以接受任何型別的資料

```
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// 可以使用這種方式調用 method
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers); 
console.log(randomEle);

// 也可以這用使用 method  TS 會自動轉型
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers); 
console.log(randomEle)
```

### 多種泛型

```
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result);
```
https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/

## TypeScript Generic Constraints 泛型約束條件

### example

* 泛型基本用法
```
function merge<U, V>(obj1: U, obj2: V) {
  return {
      ...obj1,
      ...obj2
  };
}
let person = merge(
    { name: 'John' },
    { age: 25 }
);

console.log(result); // { name: 'John', age: 25 }

```

* 如果 merge 這時傳入一個 object 和 number，TS 也不會報錯

```
let person = merge(
    { name: 'John' },
    25
);

console.log(person); // { name: 'John' }
```

* 為了讓 merge 只可以傳入 object 的資料格式，可以針對 U，V 這兩個泛型加以約束
* 使用 extends 的關鍵字，讓 U、V 這兩個泛型只能傳入 object

```
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
```


### Using type parameters in generic constraints 泛型參數

* TS 允許你宣告參數的型別，去約束要傳入的參數型別

下面這個範例 prop method 接受 object 和 property name，然後回傳 property 的值
```
function prop<T, K>(obj: T, key: K) {
    return obj[key];
}

// Type 'K' cannot be used to index type 'T'. 這會發生 compiler error
```

為了修正這個錯誤，可以加入一個約束條件，讓 K 確保他的 key 是 T 可以接紹的 property

```
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

如過傳進去的參數 name 有存在 object，這時 compiler 就不會報錯 

```
let str = prop({ name: 'John' }, 'name');
console.log(str);

// John

```

但是如果傳入的參數，不存在 object  中， compiler 就會報錯

```
let str = prop({ name: 'John' }, 'age');
// Argument of type '"age"' is not assignable to parameter of type '"name"'.
```

## TypeScript Generic Classes 泛型 class

https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/

* generic class 基本寫法

```
class className<T>{
    //... 
}
```

* 也可以傳入多個泛型
  
```
class className<K,T>{
    //...
}
```

* 也可以使用 generic constraints
  
```
class className<T extends TypeA>{
    //...
}
```

### TypeScript generic classes example

* 撰寫一個 stack 的 class
* stack 是一種後進先出 (LIFO, last-in-first-out) 的儲存資料格式，意思是最先進來的元素，會最後一個出去。
* stack 通常會有兩種操作方式
* Push：把 element 放到 stack
* Pop：把 element 移出 stack
  
```
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
```

* 建立一個新的 stack

```
let numbers = new Stack<number>(5);
```

* 這個 function 會隨機回傳兩個數值，一個高一個低

```
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
```

* 現在可以使用 randBetween 這個 method 產生的值，並把他 push 到 numbers stack

```
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}
// Output:
Push 3 into the stack.
Push 2 into the stack. 
Push 1 into the stack. 
Push 8 into the stack. 
Push 9 into the stack. 
```

* 把數字從 stack 移除
  
```
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}

// Output:
Pop 9 from the stack.
Pop 8 from the stack.
Pop 1 from the stack.
Pop 2 from the stack.
Pop 3 from the stack.
```

* 也可以建立一個字串 stack 

```
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
```

## TypeScript Generic Interfaces

* 泛型語法範例

```
interface interfaceName<T> {

}
```

* 多個泛型語法範例

```
interface interfaceName<U,V> {
    // ...
}
```


### generic interface examples

#### 使用泛型來描素物件 properties

* 下面的例子兩個成員 K, V 都屬於泛型

```
interface Pair<K, V> {
    key: K;
    value: V;
}
```

* 可以使用 Pair 這個 interface 來定義 key value 的型別
  
```
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};
```

#### 使用泛型來描素 method

* 定義一個 Collection interface 包含兩個泛型 method 一個 get 一個 remove

```
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}
```

* 建立一個 List class 去實作 Collection 的泛型 interface
* 之後你可以建立各種型別的 list ex number, strings

```
class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
```

使用 List<T> 建立一個數字 LIST

```
let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}

```

### 使用泛型描述 index type

```
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};
```

## TypeScript Modules

* TS module 包含 declarations and code
* TS module 也跟 ES6 module 有著同樣的概念


### Creating a new module

```
export interface Validator {
    isValid(s: string): boolean
}
```

### Export statements

```
interface Validator {
    isValid(s: string): boolean
}

export { Validator };
```

* TS 也允許你改名字 export

```
interface Validator {
    isValid(s: string): boolean
}

export { Validator as StringValidator };
```

### Importing a new module

* 使用 module 範例

```
import { Validator } from './Validator';

class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };
```

* 當你 import 一個 module 也可以 rename 
  
```
import { Validator as StringValidator } from './Validator';

import { Validator as StringValidator } from './Validator';

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };
```

* 下面範例描述如何使用  EmailValidator

```
import { EmailValidator } from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result); // true
```

### Importing types

* 下面宣告 type 的 module
  
```
export type alphanumeric = string | number;
```

* 如果要引用 type 的 module 可以如下列這樣寫
* TS 3.8 開始支援 import type 的寫法

```
import type {alphanumeric} from './Types';
```

* 3.8 之前的 import 範例

```
import {alphanumeric} from './Types';
```

### Importing everything from a module

* import 全部範例

```
import * from 'module_name';
```

### Re-exports

https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/