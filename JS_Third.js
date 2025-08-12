// 이터러블

const iterable = [1, 2, 3]; // 배열은 기본적으로 이터러블

// 이터레이터를 얻기 위해 Symbol.iterator 메서드를 호출
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 제너레이터

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }


// 일반적인 함수는 하나의 리턴 값만 가지게되는데 제너레이터 함수는 여러개의 리턴값을 가질 수 있다.


// 옵셔널 체이닝

const user1 = {
    name: 'Alice',
    address: {
        city: 'Wonderland'
    }
};

console.log(user1?.address?.city); // "Wonderland" 출력
console.log(user1?.contact?.email); // undefined 출력, 오류 발생하지 않음

// 예외 case를 만들어서 넘기는 방식.(타입스크립트)

// const user = null;
const user2 = {names:'홍길동'};

const names = user2?.names ?? 'Anonymous';
console.log(names); // "Anonymous" 출력
console.log(names); // "홍길동" 출력




// 'car'라는 빈 객체를 만든다.
const car = {};

// Object.defineProperty를 사용해 'speed' 속성을 정의한다.
Object.defineProperty(car, 'speed', {
    // 속성의 초기값 설정
    value: 100,

    // 이 속성값의 변경 가능 여부를 결정한다.
    // false로 설정하면 값을 바꿀 수 없다.
    writable: false
});

console.log(car.speed); // 출력: 100

// writable: false 이므로, 값을 변경하려는 시도는 무시된다.
car.speed = 200;
console.log(car.speed); // 출력: 100





const person = {
  _name: "John", // private 변수 (관례적으로 _ 사용)

  get name() { // getter
    return this._name;
  },

  set name(newName) { // setter
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("이름은 비어있을 수 없습니다.");
    }
  }
};


console.log(person.name); // getter 호출 // 출력: John
person.name = "Mike"; // setter 호출
console.log(person.name); // 출력: Mike
person.name = ""; // setter에서 유효성 검사


