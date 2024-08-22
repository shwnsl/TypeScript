

// const str:{} = 'hello';
// const num:{} = 123;
// const bool:{} = true;
// const obj:{} = {name: 'jun'};
// const arr:{} = [];
// const func:{} = () => {};
// const n:{} = null;
// const u:{} = undefined;
// obj.name;
// arr[0];


// function func1() {
//     throw new Error('error')
// }

// const result1: never = func1();
// const func2 = () => {
//     throw new Error('error')
// }
// const result2: never = func2();

// const infinite = () => {
//     while (true) {
//         console.log('반복')
//     }
// }
// function infinite2 ():never {
//     while (true) {
//         console.log('반복')
//     }
// }

// function strNum(param: string | number) {
//     if (typeof param === 'string') {
        
//     } else if (typeof param === 'number') {
        
//     } else {
//         param;
//     }
// }

// type Person = {
//     name : string,
//     age : number,
//     married : boolean
// }
// const person1: Person = {
//     name : 'jun',
//     age : 24,
//     married : false
// }

// interface Person {
//     name : string,
//     age : number,
//     married : boolean
// }
// const person1: Person = {
//     name : 'jun',
//     age : 24,
//     married : false
// }

// interface Func {
//     (x: number, y: number): number
// }
// const add: Func = (x, y) => x + y;

// interface Arr {
//     length: number,
//     [key: number]: string;
// }
// const arr:Arr = ['1', '2', '3'];

// const obj = {};
// obj[123] = '숫자 키0';

// interface NoProp {}
// const obj2 = {
//     txt : '에러안남',
// }
// const result: NoProp = "안녕";
// const result2: NoProp = undefined;

// interface Animal {
//     name: string,
// }
// interface Animal {
//     honey : boolean
// }
// const bear1: Animal = {
//     name : 'bear',
//     honey : true
// }

// type Animal = {
//     name: string;
// }
// type Bear = Animal& {
//     honey: boolean;
// }
// const bear1: Bear = {
//     name : 'bear',
//     honey : true
// }

// interface Animal {
//     name: string;
// }
// interface Bear extends Animal {
//     honey: boolean;
// }
// const bear1: Bear = {
//     name : 'bear',
//     honey : true
// }

// type Animal =  {
//     name: string;
// }
// interface Bear extends Animal {
//     honey: boolean;
// }
// interface Tiger extends Animal {
//     stripe : boolean;
// }
// interface BearTiger extends Bear, Tiger {};
// type honey = BearTiger['honey'];
// type stripe = BearTiger['stripe'];
// const bear1: Bear = {
//     name : 'bear',
//     honey : true
// }

// interface Merge {
//     one : string,
//     two : string
// }
// interface Merge2 extends Merge {
//     one : 'h' | 'w';
//     two : '123'
// }

// test
// type Name = string;
// const firstName: Name = 'kim'
// const secondName: Name = 'hun'

// type MathO = (x: number, y: number) => number;
// const add: MathO = (a, b) => a + b;
// const multiply: MathO = (a, b) => a * b;

// interface Shape {
//     color : string
// }
// interface Circle extends Shape {
//     radius: number
// }
// const circle: Circle = {
//     color : 'red',
//     radius : 20
// }

// interface Animal {
//     name : string,
//     age : number
// }
// interface Dog extends Animal {
//     breed : boolean
// }
// const dog: Dog = {
//     name: 'dsfsd',
//     age: 2,
//     breed: false
// }
// test end

// namespace Exam {
//     export interface Inner {
//         test : string;
//     }
//     export type test2 = number;
// }
// const ex1:Exam.Inner = {
//     test: 'hello'
// }
// const ex2:Exam.test2 = 123;

// interface Exam {
//     hello : string;
//     world? : number;
//     readonly check : boolean;
//     multiply? : symbol;
// }
// const example:Exam = {
//     hello : 'hi',
//     check : true
// }
// example.check = false;

// const obj = {
//     hello : 'world',
//     name : 'jun',
//     age : 24
// }
// type Keys = keyof typeof obj;
// type Keys2 = typeof obj;
// type Values = typeof obj[Keys]
// type Values2 = typeof obj['hello' | 'age']

// type Arr = [1, 2, 3]
// type First = Arr[0]
// type length = Arr['length'];

// type Arr2 = (string | boolean)[];
// type El = Arr2[number];

// type HelloHi = {
//     [key in 'hello' | 'hi']:string;
// }

// type Tuple = [1, 2, 3];
// type CopyTuple = {
//     [key in keyof Tuple]: Tuple[key]
// }
// const copyTuple: CopyTuple = [1,2,3]

// type A = string | boolean;
// type B = boolean | number;
// type C = A & B; //교집합
// type D = unknown | {}; //합집합
// type E = never & {};
// type F = {a: 'b'} & number;
// type G = null & {a: 'b'};
// type J = {} & string;

// let a: ['hi', 'readonly'] = ['hi', 'readonly'];
// let b: string[] = ['hi', 'normal'];
// a = b;
// b = a;


// let a:readonly string[] = ['hi', 'readonly'];
// let b: string[] = ['hi', 'normal'];
// a = b;
// b = a;

// type Optional = {
//     a? : string;
//     b? : string;
// }
// type Essential = {
//     a : string;
//     b : string;
// }
// const o: Optional = {
//     a: 'gellgedfkgl'
// }
// const e: Optional = {
//     a: 'gellgedfkgl',
//     b: 'fgdgdfgd'
// }
// const o2: Optional = e;
// const e2: Essential = o;

// interface Money {
//     amount : number,
//     unit : string
// }
// interface Liter {
//     amount : number,
//     unit : string
// }
// const liter: Liter = {amount: 11, unit: 'asddas'}
// const circle: Money = liter;

// interface Product {
//     name : string,
//     price : number,
//     description ? : symbol
// }
// const produt1: Product = {
//     name: 'fdsfsd',
//     price : 32423
// }
// const produt2: Product = {
//     name: 'fdsfsd',
//     price : 32423
// }

// interface Dictionary {
//     [key : string]: string
// }
// const dictionary: Dictionary = {
//     key : 'dasdas',
//     value : 'dasdas'
// }

// interface Person<T, A> {
//     type: 'human',
//     race: 'black',
//     name: T,
//     age: A
// }
// interface Lim extends Person<'lim', 32> {}
// interface Kim extends Person<'kim', 34> {}

// interface Array<T> {
//     [key : number]: T,
//     length : number
// }

// const numbers: Array<number> = [1,2,3,4]

// const personE =<N,A> (name: N , age: A) => ({
//     type: 'human',
//     race: 'black',
//     name,
//     age
// })

// interface PersonI<N, A> {
//     type: 'black',
//     race: 'gufgmas',
//     name: N,
//     age: A
// }
// type PersonT<N, A> = {
//     type: 'black',
//     race: 'gufgmas',
//     name: N,
//     age: A
// }
// type Lim = PersonI<'kim', 32>
// interface Lee extends PersonT<'lee', 54> {}

// class Person<N,A>{
//     name: N;
//     age: A;
//     constructor(name: N, age: A) {
//         this.name = name;
//         this.age = age;
//     }
//     method<B>(param: B) {}
// }

// interface PersonI<N, A> {
//     name : N,
//     age : A,
//     method<B>(param: B):void
// }

// interface Person<N = string, A = number> {
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A
// }
// type Person1 = Person;
// type Person2 = Person<number>;
// type Person3 = Person<number, boolean>;

// const personE = <N, A = unknown>(name: N, age: A): Person<N, A> => ({
//     type: 'human',
//     race: 'yellow',
//     name,
//     age
// })
// const names = personE('kin', 87)

// function values<T>(initial: T[]) {
//     return {
//         hasValue(value: T) {
//             return initial.includes(value)
//         }
//     }
// }
// const savedValues = values(['a', 'b', 'c'])
// savedValues.hasValue('x');

// type A1 = string;
// type B1 = A1 extends string ? number : boolean;
// type A2 = number;
// type B2 = A2 extends string ? number : boolean;

// interface X {
//     x: number
// }
// interface XY {
//     x: number,
//     y: number,
// }
// interface YX extends X {
//     y: number
// }
// type A = XY extends X ? string : number;
// type B = YX extends X ? string : number;

// type result = [1] extends [string] ? true : false
// type result2 = [1] extends number[] ? true : false

// type Start = string | number;
// type New = Start extends string | number ? Start[] : never;
// let n: New = ['hi'];
// n = [123];

// type New<A> = A extends string | number ? string[] : never;
// type Never = New<number>;
// type Arr = New<string>;

// test
// function func<T>(arr: T[]): T {
//     return arr[0];
// }
// console.log(func([1,2,3]))

// function leng<T extends {length: number}>(item: T) {
//     console.log(item.length);
// }
// leng('hihloeeoeo')

// function num<T>(a: T, b: T): T {
//     return a > b ? a : b;
// }
// console.log(num(10, 20))

// type IsString<T> = T extends string ? true : false;
// type Test1 = IsString<string>;
// type Test2 = IsString<number>;

// type StringS<T> = T extends string ? T : never;
// type Test1 = StringS<'aaa' | 123 | false>
// test end