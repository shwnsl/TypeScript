let name2:string = 'kim';
let age2 = 20;
interface Personss {name: string}
let personnn: Personss = {name: 'lee'};

[1,2,3].myForEach(() => {});
[1,2,3].myForEach((v, i, a) => { console.log(v, i, a) });
[1,2,3].myForEach((v, i) => { console.log(v) });
[1,2,3].myForEach((v) => 3);
// ['1', '2', '3'].myForEach((v) => {
//     console.log(v.slice(0))
// })
// [true, 2, '3'].myForEach((v) => {
//     if(typeof v === 'string') {
//         v.slice(0);
//     } else {
//         v.toFixed();
//     }
// })
[1, 2, 3].myForEach(function() {
    console.log(this);
}, {a: 'b'})
interface Array<T> {
    myForEach<K = Window>(callback: (this: K, v: T, i: number, a: T[]) => void, thisArg? : K): void;
}

const r1 = [1, 2, 3].myMap(() => {})
const r2 = [1, 2, 3].myMap((v, i, a) => v)
const r3 = ['1', '2', '3'].myMap((v) => parseInt(v))
const r4 = [{num: 1}, {num: 2}, {num: 3}].myMap(function(v) {
    return v.num;
})
interface Array<T> {
    myMap<R>(callback: (v: T, i:number, a: T[]) => R): R[];
}

const f1 = [1, 2, 3].myFilter((v) => v < 2)
const f2 = [1, 2, 3].myFilter((v, i, a):v is never => false)
const f3 = ['1', 2, '3'].myFilter((v):v is string => typeof v === 'string')
const f4 = [{num: 1}, {num: 2}, {num: 3}].myFilter(function(v){
    return v.num % 2 === 1;
})
interface Array<T> {
    myFilter<S extends T>(callback: (v: T, i:number, a: T[]) => v is S, thisArg?: any): S[];
    myFilter(callback: (v: T, i:number, a: T[]) => boolean, thisArg?: any): T[];
}

const d1 = [1, 2, 3].myReduce((a, c) => a + c)
const d2 = [1, 2, 3].myReduce((a, c, i, arr) => a + c, 10)
const d3 = [{num: 1}, {num: 2}, {num: 3}].myReduce(
    function(a, c) {
        return {...a, [c.num]: 'hi' }
    },
    {}
)
const d4 = [{num: 1}, {num: 2}, {num: 3}].myReduce(
    function(a, c) {
        return a + c.num
    },
    ''
)
interface Array<T> {
    myReduce(callback: (a: T, c: T, i:number, arr: T[]) => T, iV?: T): T;
    myReduce<S>(callback: (a: S, c: T, i:number, arr: T[]) => S, iV?: S): S;
}