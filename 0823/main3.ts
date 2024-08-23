// function add(a: string, b:string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//     return a + b;
// };
// add("gelele", "dsa");
// add(13, 546);

// function exam(param: string): string;
// function exam(param: string | null): number;
// function exam(param: string | null): string | number {
//     if (param) {
//         return 'string'
//     } else {
//         return 123
//     }
// }
// const result = exam ("wjat");

// interface Add {
//     (x: number, y: number): number;
//     (x: string, y: string): string;
// }
// const add: Add = (x: any, y: any) => x + y;
// add(1, 2);
// add("das", "adssa");

// type Add1 = (x: number, y: number) => number;
// type Add2 = (x: string, y: string) => string;
// type Add3 = Add1 & Add2;
// const add2: Add3 = (x: any, y: any) => x + y;
// add2(1,2);
// add2("sadsad","sds");
// add2(1,"sadsa");

// function sayS(word: string): string;
// function sayS(word: string[]): string;
// function sayS(word: any): any {
//     if (typeof word === 'string') {
//         return word
//     } else if (Array.isArray(word)) {
//         return word.join("");
//     }
//     throw new Error("error")
// };
// console.log(sayS(['fds', 'dsffsd']))

// enum Level {
//     NOVICE,
//     INTERMEDIATE,
//     ADVANCED,
//     MASTER
// }
// const a = Level.NOVICE;
// const b = Level[Level.NOVICE];

// function yourLevel(level: Level) {
//     console.log(Level[level])
// }
// const myLevel = Level.ADVANCED;
// yourLevel(myLevel)

// type El<T> = T extends (infer E)[] ? E : never;
// type Srt = El<string[]>;
// type NumBool = El<(number | boolean)[]>

// type ElementType<T> = T extends (infer E)[] ? E : never;
// type numArray = number[];
// type Ele = ElementType<numArray>

// type Rec = {
//     name: string,
//     children: Rec[];
// }
// const rec1: Rec = {
//     name: 'test',
//     children: []
// }
// const rec2: Rec = {
//     name: 'test',
//     children: [
//         {name: 'test2', children: []}
//     ]
// }

// test
// function remoneD<T>(arr: T[]): T[] {
//     return Array.from(new Set(arr))
// }
// const arr1 = [1,1,2,3,3,4,5,6,6,7,7,8]
// const arrnum = remoneD(arr1);

// function getLen(arr: any[]): number;
// function getLen(str: string): number;
// function getLen(a: any): number {
//     return a.length;
// };
// test end

// class Person {
//     name: string;
//     age: number;
//     married: boolean;
//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

// const Person2 = class {
//     name: string;
//     age: number;
//     married: boolean;
//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

// interface Human {
//     name: string;
//     age: number;
//     married: boolean;
// }
// class Person implements Human {
//     name;
//     age;
//     married;
//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

// class Person {
//     name?: string;
//     readonly age: number;
//     protected married: boolean;
//     private value: number;
//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//         this.value = 0;
//     }
//     changeAge(age: number) {
//         this.age = age;
//     }
// }

// class Child extends Person {
//     constructor(name: string, age: number, married: boolean) {
//         super(name, age, married)
//     }
//     sayName() {
//         console.log(this.name)
//     }
//     sayMarried() {
//         console.log(this.married)
//     }
//     sayValue() {
//         console.log(this.value)
//     }
// }

// const child = new Child('kim', 25, false)
// child.name;
// child.married;

// interface Human {
//     name: string;
//     age: number;
//     married: boolean;
// }

// class Person implements Human {
//     name;
//     protected age;
//     married;
//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

// class Human {
//     play() {
//         console.log('play')
//     }
//     study() {
//         console.log('study')
//     }
// }
// class Employee extends Human {
//     work() {
//         console.log('work')
//     }
//     override study() {
//         console.log('study')
//     }
// }

// class Signaure {
//     [propName: string]: string | number | undefined;
//     static[propName: string]: boolean
// }
// const sig = new Signaure();
// sig.hello = 123;
// Signaure.isGood = true;

// class Person {
//     name: string;
//     age: number;
//     married: boolean;
//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
//     sayMarried(this: Person) {
//         console.log(this.married)
//     }
//     sayCallback(callback: () => void) {
//         callback.call(this);
//     }
// }

abstract class Person {
    name: string;
    age: number;
    married: boolean;
    abstract value: number;
    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }
    changeAge(age: number) {
        this.age = age;
    }
    abstract sayAge(): void;
    abstract sayMarried(): void;
}

class RealPerson extends Person {
    value: number = 0;
    sayAge() {
        
    }
    sayMarried() {
        
    }
}

//test 
type FirstElement<T> = T extends [infer U, ...any[]] ? U : never;
type Tuple1 = [string, number, boolean];
type Tuple2 = [boolean, number];

class Animal {
    private name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age:number, breed: string) {
        super(name, age);
        this.breed = breed
    }
    bark(): string {
        return 'woof'
    }
}
// test end

// interface Address {
//     email: string;
//     address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = {email : 'asd@asd.com'};
// const all: Address = {email : 'asd@asd.com', address : 'asd'};

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
// type TodoPreview = Pick<Todo, "title" | "completed">
// const todo: TodoPreview = {
//     title: 'clean',
//     completed: false
// }

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
// type TodoPreview = Omit<Todo, "description">
// const todo: TodoPreview = {
//     title: 'clean',
//     completed: false
// }

// type User = {
//     firstName: string;
//     lastName?: string;
// }
// const firstUser: User = {
//     firstName: "sdadas"
// }
// const seconsUSer:Required<User> = {
//     firstName: "sdfsdf",
//     lastName: "dsadsa"
// }
// interface Cat {
//     age: number;
//     breed: string;
// }
// type CatName = "a" | "b" | "c"
// const cats: Record<CatName, Cat> = {
//     a: {age: 10, breed: "B"},
//     b: {age: 10, breed: "B"},
//     c: {age: 10, breed: "B"}
// }

// type T0 = ReturnType<() => string>
// type T1 = ReturnType<(s: string) => void>

// function fn(str: string) {
//     return str;
// }

// const a : ReturnType<typeof fn> = "hello"
// const b : ReturnType<typeof fn> = 2132;

type Users = 'kim' | 'lee' | 'park';
type UserName = {[K in Users] : string}
const userNameInfo:UserName = {
    kim: 'kim',
    lee: 'lee',
    park: 'park'
}