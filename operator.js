//1. String contatenation
console.log('1'+2);
console.log('my'+'cat');
console.log(`string literal : 1+2 = ${1+2}`);

//2. Neumeric operators
console.log(1+1);
console.log(2-1);
console.log(2*3);
console.log(4/2);
console.log(5%2);
console.log(2**3);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;

//4. Logical operators : ||(or) &&(and) !(not)
const value1 = false;
const value2 = 4 < 2;

// value1이 false이면 check의 console.log가 찍힘
// value2이 true이면 뒤에 결과값은 보지 않으므로 check의 console.log는 찍히지 않음

// ||(or), finds the first truthy value
// 앞쪽에 heavy한 계산을 하는 값이 오는 것보다 가벼운 것을 앞에 배치하고 무거운 것은 뒤로 보내는 것이 더 효율적
console.log(`or: ${value1 || value2 || check()} `);

// &&(and), finds the first falsy value

function check() {
    console.log('checkcheck');
    return true;
}

//5. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// object는 메모리에 reference가 저장이 됨 그 안에 데이터가 같더라도 다른 값임
const yujin1 = { name: 'yujin' };
const yujin2 = { name: 'yujin' };
const yujin3 = yujin1;
console.log(yujin1==yujin2);
console.log(yujin1===yujin2);
console.log(yujin1===yujin3);