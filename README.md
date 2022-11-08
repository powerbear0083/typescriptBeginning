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

#### 宣告回資料型別的 Array
```
let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];
skills.push(100); // ts 會報錯， Argument of type 'number' is not assignable to parameter of type 'string'.
```