//1. Use-strict
// use this for vanilla-javascript
'use-strict';

//2. Variable r/w(read/write) - 메모리에서 읽고 쓰는 것이 가능함
// let (added ES6)
// let이 나오기 전에는 var 사용함
// var hoisting : 어디서 선언하던지 상관없이 항상 선언을 제일 위로 끌어올려 주는 것
let globalname = 'globalname';

{
    let blockname = 'blockname';
    blockname = 'name';
    console.log(blockname);
}

console.log(globalname); // block 밖의 global변수 이므로 출력됨
//console.log(blockname); block 내의 변수이므로 출력되지 않음

//3. Constant
// 한 번 할당하면 값이 바뀌지 않는 변수임
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistake

//Note!
//Imumutable data types : premitive types, frozen objects(i.e object.freeze())
//Mutable data types : all objects
const max = 5;

// 정리
// 변수 -> Mutable : let // Immutable : const

//4. Variable types
// number, string, boolean, null, undefined, symbol, object
// function

//number
const infinity = 1 / 0; // Infinity 출력
const negativeinfinity = -1 / 0; // -Infinity 출력
const nAn = 'not a number' / 2; // NaN 출력

//string
const char = 'c';
const yujin = 'yujin';
const greeting = 'hello' + yujin;

console.log(`value: ${greeting}`) // template literals (string)

//boolean
//false : 0, undefined, null, NaN, ''
//true : any other value

//symbol
const symbole1 = Symbol('id');
const symbole2 = Symbol('id');
console.log(symbole1===symbole2); //Symbole은 고유한 값을 생성해주기 때문에 안의 string이 같아도 false가 나옴

const gSymbole1 = Symbol.for('id');
const gSymbole2 = Symbol.for('id');
console.log(gSymbole1===gSymbole2); // true

//object
const yujin2 = {name: 'yujin', age: 24};
yujin2.age=20; // 가능

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
text = '7' + 5;
console.log(text) // 75
text = '8' / '2';
console.log(text) // 4





