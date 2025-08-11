// 0810_js_기초_심화 복습 //

// 1. 출력 양식

console.log('hello');

let age = 26;
console.log(age); // 26 출력

age = 30;
console.log(age); // 30 출력


const PI = 3.14;
console.log(PI); //3.14 출력

// PI = 3.14159; // 오류 발생


// 이미 만들었던 변수/상수를 다시 만들 수 x

// let c=1;
// let c=2; 오류 발생

const A = 1;
console.log(A);

// const B; // 불가능
// let c // 가능


// 문자열(string)

let name = "Alice"; 

let hong = "홍길동"
console.log(`안녕하세요, ${hong}입니다.`) // 안녕하세요, 홍길동입니다.

// 작은 따옴표 

let message = '그는 "이건 \'예제\'입니다"라고 말했다.';
console.log(message); // 그는 "이건 '예제'입니다"라고 말했다.

// 큰 따옴표 

let message2 = "그녀가 '이건 \"예제\"입니다'라고 말했다.";
console.log(message2); // 그녀가 '이건 "예제"입니다'라고 말했다.

let message3 = "안녕하세요,\n자바스크립트 세계에 오신 것을 환영합니다!";
console.log(message3);
// 출력:
// 안녕하세요,
// 자바스크립트 세계에 오신 것을 환영합니다!

let message4 = "이름\t나이\t직업\n홍길동\t30\t프로그래머";
console.log(message4);
// 출력:
// 이름    나이    직업
// 홍길동  30    프로그래머

let path = "C:\\사용자\\문서\\파일.txt";
console.log(path); // C:\사용자\문서\파일.txt

let isStudent = true; // true는 불리언입니다.
let isGraduated = false; // false도 불리언입니다.

// ! 기호를 변수 앞에 붙여 참 거짓 값을 반전
!isStudent // false
!isGraduated // true

const boolTrue = 1 < 2; //1 < 2 는 참이므로 boolTrue 의 값은 true 입니다.
const boolFalse = 1 > 2; //1 > 2 는 거짓이므로 boolFalse 의 값은 false 입니다.

// 연산자 +, -, *, / %

// 문자열 연산자

let fullName = "John" + " " + "Doe"; 
fullName = fullName + " :)" // fullName 은 "John Doe :)" 입니다.
console.log(fullName)

// 숫자, 문자열

console.log(52 + 273); // 325
console.log("52" + 273); // 52273
console.log(52 + "273"); // 52273
console.log("52" + "273"); // 52273

// 자료형 확인

console.log(typeof 10)

// undefined, null

let x;
console.log(x, typeof x); // typeof가 반환하는 값은 문자열 "undefined"

let y=1;

x = 1;
console.log(x);

x = null;
console.log(x, typeof x); // null의 타입은 'object'로 반환 - 초기 설계부실

// 비교 연산자
// == (값만 비교), !=
// === (값과 자료형 비교), !==
// >, >= (크면, 크거나 같으면)
// <, <= (작으면, 작거나 같으면)



// * js에서는 타입만 다를 뿐 값이 같을 수 있다는 전제를 깔고 감.*
// Why? 타입 변경이 쉽기 때문이다.



// 부수효과
// 증가 연산자 ++ -- += 
// 할당 연산자
//boolean 관련 연산자


// 객체

// 기본구조

let person = {
    name: "John", // name은 키, "John"은 값
    age: 30,      // age는 키, 30은 값
    isStudent: false // isStudent는 키, false는 값
};

console.log(person)

// 객체의 속성에 접근 (점 표기법, 대괄호 표기법)

console.log(person.name); // "John" 출력
console.log(person.age);  // 30 출력

console.log(person["name"]); // "John" 출력
console.log(person["age"]);  // 30 출력

// * 대괄호표기법은 선호해야 오류발생을 줄인다. *

// 속성 추가

person.gender = "male"; // 새로운 속성 추가
person.age = 31;        // 기존 속성 값 수정

console.log(person); 
// {name: "John", age: 31, 
// isStudent: false, gender: "male"}

// 객체에 함수 속성 추가

let car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
        console.log("The car has started.");
    }
};

car.start(); // "The car has started." 출력


// 배열
let fruits = ["Apple", "Banana", "Cherry"];
// 요소 추가
// 마지막에
fruits.push("Orange");
console.log(fruits); 
// ["Apple", "Banana", "Cherry", "Orange"]

// 특정 위치에
fruits[1] = "Blueberry"; 
// 두 번째 요소를 "Blueberry"로 변경
console.log(fruits); 
// ["Apple", "Blueberry", "Cherry", "Orange"]


// 제거 (마지막 pop()메서드, 처음 shift()메서드)



// 배열 안에 객체 넣기

let students = [
    {name: "Alice", age: 22},
    {name: "Bob", age: 24},
    {name: "Charlie", age: 23}
];

console.log(students[1].name); 
// 두 번째 배열에 있는 객체의 name 을 출력 => "Bob" 출력


// 객체 안에 배열 넣기
let course = {
    title: "JavaScript Basics",
    students: ["Alice", "Bob", "Charlie"]
};

console.log(course.students[2]); 
// course 객체의 students에서 3번째 값 => "Charlie" 출력


// 조건문

// 1. if/else 조건문
// 2. else if
// 3. 삼항 연산자


// seitch 문법


let score = 85;

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
}


// 반복문

// 1. for문

// 기본 반복문 
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
// 중첩 반복문

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

// break와 continue 예제

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i가 5일 때 반복문 종료
    }
    if (i % 2 === 0) {
        continue; // 짝수는 건너뛰고 다음 반복으로
    }
    console.log(i); // 1, 3 출력
}


// for of 문법 - 순회하여 값을 출력 
let fruits2 = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits2) {
    console.log(fruit);
}

// for in 문법 - 열거 가능한 속성을 순회하여 값을 출력 

let person2 = {
    name: "John",
    age: 30,
    isStudent: true
};

for (let key in person2) {
    console.log(key + ": " + person2[key]);
}

// while문: while(condition)
// condition이 만족하는 동안 실행 
let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// do_while문
// 일단 do 아래 부분을 실행하고, 그 이후 condition이 만족하는 동안 실행

let count2 = 0;

do {
    console.log("Count is: " + count2);
    count2++;
} while (count2 < 5);


// 함수

// function functionName1() {
// 	// 실행할 코드
// }

// function functionName2(매개변수1, 매개변수2) {
    // 실행할 코드
    // return 반환값; // 선택 사항
// }

// 예외처리
// try catch

// try {
//   // 오류가 발생할 가능성이 있는 코드
// } catch (error) {
//   // 오류가 발생했을 때 실행할 코드
// } finally {
//   // 오류 발생 여부와 관계없이 항상 실행되는 코드
// }

// 블록문과 스코프

// 1. 블록문: js에서 코드의 묶음을 중괄호 {}로 감산 문장.

// ex)

// if (true) {
//     // 이 부분이 블록문
//     console.log("조건이 참입니다.");
// }

// 전역 스코프 지역 스코프
// 블록 스코프
// var 스코프


