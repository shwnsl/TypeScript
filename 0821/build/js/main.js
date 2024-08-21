"use strict";
// const add = function(a:number, b:number):number {
//     return a + b;
// }
// function add2(a:number, b:number):number {
//     return a + b;
// }
// const result1 = add2(1, 2);
// const str = 'hello';
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym = Symbol('sym');
// const obj = {hello: '병신아'};
// let str = 'hello';
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol('sym');
// let obj = {hello: '병신아'};
// const str: '시발련아' = '시발련아';
// str = '안녕?';
// const obj = {name: 'jun'} as const; // read-only 수정 불가능
// const arr = [1, 2, 'three'];
// obj.name = 'sival';
// arr.push(4);
// const arr1: string[] = ['1', '2', '3'];
// const arr2: Array<number> = [1, 2, 3];
// const arr3 = [1, '3', 3];
// const arr4 = [];
// const tuple: readonly[number, boolean, string] = [1, true, 'sival'];
// tuple[0] = 3;
// tuple[2] = 'world';
// tuple.push('sibal'); // 바꿀 수 없게 된다
// console.log(tuple);
// 3, true, world, sibal
// const srtNumBools: [string, number, ...boolean[]] = ['sival', 3, false, true, false];
// const [a, ...rest] = ['sibalgasaki', 1, 2, 3];
// const [b, ...rest2]:[string, ...number[]] = ['sibalgasaki', 1, 2, 3];
// function add3(x: number, y: number) {
//     return x + y;
// }
// const str1: String = 'SSibal';
// const str2: string = str1;
// function add(x: number, y: number) {
//     return x + y;
// }
// const result: add(1, 2) = add(1, 2)
// const result2: typeof add(1, 2) = add(1, 2)
// const add2: typeof add = (x: number, y: number) => x + y;
// let strNum: string | number = 'hell';
// strNum = 1;
// strNum = 'sadas';
// const arr = [1, '2', 3];
// function  union(value: string | number): number {
//     if(typeof value === 'string') {
//         return parseInt(value);
//     }
//     return value;
// }
// union(1);
// union('1');
// const arr: string[] = [];
// const arr = [];
// arr.push('1');
// arr;
// arr.push(3);
// arr;
// const a:any = '123';
// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + '1';
// const any5 = a / 1;
// fetch('url').then< {data: string} >((res) => {
//     return res.json();
// }).then((result) => {
// })
// const result: {hello: string} = JSON.parse('{"hello":"씨발아"}')
// try {
// } catch (e) {
//     const error = e as Error;
//     console.log(error.message);
// }
let name2 = "kim";
function add(a, b) {
    return a + b;
}
function isEven(num) {
    return num % 2 === 0;
}
