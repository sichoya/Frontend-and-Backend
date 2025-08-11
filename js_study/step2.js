// 1-1 함수와 일급 객체



// 5. 접근자 프로퍼티와 은닉

// 5.1 접근자 프로퍼티
// 사용 이유: 보호 목적.
// - Getter (get)
// - Setter (set)
// 5.1.1 객체 리터럴 방식

const inventory = {
    quantity: 10,  // 실제 개수

    // Getter: 개수를 그대로 반환
    get totalQuantity() {
        return this.quantity;
    },

    // Setter: 개수를 설정 (음수가 되지 않도록 처리)
    set totalQuantity(value) {
        if (value < 0) {
            console.log("개수는 음수가 될 수 없습니다.");
        } else {
            this.quantity = value;
        }
    }
};

// Getter 사용
console.log(inventory.totalQuantity); // 10 출력

// Setter 사용
inventory.totalQuantity = 15;
console.log(inventory.totalQuantity); // 15 출력

// 잘못된 개수 설정 시도
inventory.totalQuantity = -5; // "개수는 음수가 될 수 없습니다." 출력
console.log(inventory.totalQuantity); // 15 출력 (변경되지 않음)

// 5.1.2 클래스에서

class Inventory {
    constructor(quantity) {
        this.quantity = quantity;  // 실제 개수
    }

    // Getter: 개수를 그대로 반환
    get totalQuantity() {
        return this.quantity;
    }

    // Setter: 개수를 설정 (음수가 되지 않도록 처리)
    set totalQuantity(value) {
        if (value < 0) {
            console.log("개수는 음수가 될 수 없습니다.");
        } else {
            this.quantity = value;
        }
    }
}

const inventorys = new Inventory(10);

// Getter 사용
console.log(inventorys.totalQuantity); // 10 출력

// Setter 사용
inventorys.totalQuantity = 15;
console.log(inventorys.totalQuantity); // 15 출력

// 잘못된 개수 설정 시도
inventorys.totalQuantity = -5; // "개수는 음수가 될 수 없습니다." 출력
console.log(inventorys.totalQuantity); // 15 출력 (변경되지 않음)


// 5.1.3 캡슐화

class Student {
    // private 필드 정의
    #studentName = ''; // #기호는 private를 의도한 것이다.
    #studentID = 0;

    constructor(studentName, studentID) {
        this.#studentName = studentName;
        this.#studentID = studentID;
    }

    // Getter: studentName을 읽을 때 호출
    get name() {
        return this.#studentName;
    }

    // Setter: studentName을 설정할 때 호출
    set name(newName) {
        this.#studentName = newName;
    }

    // Getter: studentID를 읽을 때 호출
    get id() {
        return this.#studentID;
    }

    // Setter: studentID를 설정할 때 호출
    set id(newID) {
        this.#studentID = newID;
    }

    // private 필드에 접근하여 출력하는 메서드
    displayInfo() {
        console.log(`학생 이름: ${this.name}, 학번: ${this.id}`);
    }
}

// Student 클래스의 인스턴스 생성
const student1 = new Student('이영희', 2023001);


// 6. 프로퍼티 어트리뷰트

// 6.1 데이터 프로퍼티 설정

const person = {};

// 데이터 프로퍼티 'name'을 정의
Object.defineProperty(person, 'name', {
    value: 'Alice',
    writable: false, // 값이 수정 불가능하게 설정
    enumerable: true, // 열거 가능하게 설정
    configurable: false // 프로퍼티 삭제 또는 속성 변경 불가능하게 설정
});

console.log(person.name); // "Alice" 출력

person.name = 'Bob'; // writable: false 이므로 값이 수정되지 않음
console.log(person.name); // 여전히 "Alice" 출력

for (let key in person) {
    console.log(key); // 'name'이 출력됨 (enumerable: true)
}

// 'name' 프로퍼티 삭제 시도 (configurable: false 이므로 삭제되지 않음)
delete person.name;
console.log(person.name); // 여전히 "Alice" 출력


// 6.2 접근자 데이터 프로퍼티 설정

const product = {
    _price: 100, // 실제 가격을 저장하는 내부 변수
    // 접근자 프로퍼티 'price' 정의
    get price() {
        return `$${this._price}`; // 가격을 문자열로 반환
    },
    set price(value) {
        if (value > 0) {
            this._price = value; // 값이 0보다 큰 경우에만 가격 설정
        } else {
            console.log('가격은 0보다 커야 합니다.');
        }
    }
};

console.log(product.price); // "$100" 출력

product.price = 150;
console.log(product.price); // "$150" 출력

product.price = -50; // 유효하지 않은 값이므로 setter에서 경고 메시지 출력
console.log(product.price); // "$150" 출력 (값이 변경되지 않음)

// 7. 스프레드 -> 이 방식은 React에서 많이 사용

// 7.1 배열에서의 스프레드 문법 사용
// 배열의 복사
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr1의 요소를 복사하여 arr2에 할당
console.log(arr2); // [1, 2, 3] 출력

// 배열의 결합
const arr3 = [4, 5, 6];
const combinedArray = [...arr1, ...arr3]; // arr1과 arr3을 결합
console.log(combinedArray); // [1, 2, 3, 4, 5, 6] 출력

// 함수 호출에서의 사용
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6 출력 (numbers 배열의 요소가 각각 a, b, c로 전달됨)



// 7.2 객체에서의 스프레드 문법 사용
// 객체의 복사
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 }; // obj1의 속성을 복사하여 obj2에 할당
console.log(obj2); // { name: "Alice", age: 25 } 출력

// 객체의 병합
const obj3 = { job: "Developer" };
const combinedObj = { ...obj1, ...obj3 }; // obj1과 obj3을 병합
console.log(combinedObj); // { name: "Alice", age: 25, job: "Developer" } 출력

// 객체의 속성 덮어쓰기
const obj4 = { name: "Bob", age: 30 };
const updatedObj = { ...obj1, ...obj4 }; // obj1의 속성들이 obj4의 속성들로 덮어써짐
console.log(updatedObj); // { name: "Bob", age: 30 } 출력


// React에서는 상태가 중요하다.

// 8. 디스트럭쳐링
//    : 배열이나 객체의 속성을 쉽게 추출하여 변수에 할당할 수 있는 문법

// 8.1 배열 디스트럭쳐링

// 기본 배열 디스트럭쳐링
const numberss = [1, 2, 3];
const [first, second, third] = numberss;
console.log(first); // 1 출력
console.log(second); // 2 출력
console.log(third); // 3 출력

// 일부 요소만 디스트럭쳐링할 수 있습니다.
const [one, , three] = numberss; // 두 번째 요소는 무시
console.log(one); // 1 출력
console.log(three); // 3 출력

// 기본값 설정
const [a, b, c = 10, d = 20] = [1, 2];
console.log(a); // 1 출력
console.log(b); // 2 출력
console.log(c); // 10 출력 (기본값 사용)
console.log(d); // 20 출력 (기본값 사용)


// 8.2 객체 디스트럭쳐링

// 기본 객체 디스트럭쳐링
const person1 = {
    named: "Alice",
    age: 25,
    job: "Developer"
};

const { named, age, job } = person1;
console.log(named); // "Alice" 출력
console.log(age); // 25 출력
console.log(job); // "Developer" 출력

// 다른 이름으로 변수 할당
const { named: personName, age: personAge } = person;
console.log(personName); // "Alice" 출력
console.log(personAge); // 25 출력

// 기본값 설정
const { named: n, age: ag, hobby = "Reading" } = person;
console.log(n); // "Alice" 출력
console.log(ag); // 25 출력
console.log(hobby); // "Reading" 출력 (기본값 사용)


// 8.3 함수 매개변수에서의 디스트럭쳐링
// 함수의 매개변수에서 객체 디스트럭쳐링 사용
function printPerson({ namec, age }) {
    console.log(`이름: ${name}, 나이: ${age}`);
}

const user = { namec: "Bob", age: 30 };
printPerson(user); // "이름: Bob, 나이: 30" 출력


// 9. 표준 내장 객체

// 9.1
// 기본 자료형
let number = 273;
let string = '안녕하세요'
let boolean = true

// 자료형을 출력
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

// 객체 자료형
let numb = new Number(273);
let stri = new String('안녕하세요');
let boolea = new Boolean(true);

// 자료형을 출력
console.log(typeof numb);
console.log(typeof stri);
console.log(typeof boolea);

// 기본 자료형
let stringA = '음료|1800원';
console.log(stringA.split('|'));

// 객체 자료형
let stringB = new String('음료|1800원');
console.log(stringB.split('|'));


// 9.2 일반 vs 객체 자료형

// 변수 생성
let primitiveNumber = 123;

// 메서드 추가
primitiveNumber.method = function() {
	return 'Primitive Method';
}

// 메서드 실행시 메서드를 추가하지 못하므로 에러가 발생합니다.
console.log(primitiveNumber.method());


// 9.3 프로토 타입

// 변수 생성
let primitiveNumber = 456;

// 메서드 추가
Number.prototype.method = function() {
	return 'Primitive Method';
}

// 메서드 실행
console.log(primitiveNumber.method());

// Number 객체 
// 둘 다 편한대로 사용하면된다.

let numberFromLiteral = 123;
let numberFromConstructor = new Number(123);

// 9.4 Number 클래스 속성

// 클래스를 생성
class Test {}

// 클래스에 속성과 메서드를 추가
Test.property = 123;
Test.method = function() {
  return "This is a method.";
};

// 출력
console.log(Test.property); // 123
console.log(Test.method()); // "This is a method."


// 9.5 String 객체
// 아래 두 가지 방법으로 생성한다.

let stringFromLiteral = '안녕하세요';
let stringFromConstructor = new String('안녕하세요');


// 9.6 메서드 체이닝

// 파괴적 메서드: 자신을 호출하는 객체의 내용을 변화시키는 메서드
// 비파괴적 메서드: 자신을 호출하는 객체의 내용을 변화시키지 않고 리턴하는 메서드

// 메서드 체이닝 흐름


// Data 객체

// UTC(세계 협정시 = 기준시)
// 대부분의 Data메서드는로컬 시간대에 따라 값을 반환하지만,
// UTC기반 메서드도 제공됨.

// 타임스탬프



// Math 객체

// Array 객체


// *중요*
// 콜백 함수와 함께 사용하는 메서드

//  forEach

//  map *매우중요*


//  filter *매우중요*

// *중요*


// 11. json
// 프로그래밍에 독립적이다.


// 웹 애플리케이션에서의 데이터 전송
// - Restful API에서 JSON형식으로 데이터를 주고받음

// 데이터 저장
// - NoSQL에서 JSON형식 저장


// Symbol - 객체의 프로퍼티를 만들 수 있다.

// 의도적으로 심볼을 만들고싶을 때 사용 가능하다.


// 12. 이터러블과 제너레이터

// Set의 개념
// 배열을 만들고 싶을 때

// Map의 개념 
// 키는 어떤 값이든 사용 가능하다.
// 객체를 키로 사용 가능