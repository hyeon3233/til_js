/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}
/**
 * 숫자 나누기 기능
 * @param {number} a - number
 * @param {number} b - number
 * @returns {number} - 나눗셈 결과
 *
 * ------ 호출예 -----
 * ```javascript
 * let result = divide(5, 4)
 * ```
 *
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0 이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분모는 숫자여야 합니다.");
  }

  return a / b;
}

/**
 * 계산기 기능
 * 계산기 기능은 +, -, *, / 기능이 있습니다.
 * @param {string} symbol  +, -, *, / 기호 중 1개 입력
 * @param {number} a 숫자 입력
 * @param {number} b 숫자 입력
 * @returns {number} 결과는 숫자
 *
 * 사용 예) =================
 *
 * ```javascript
 * const result = calcurator("+", 5, 4);
 * ```
 */
function calcurator(symbol, a, b) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요.");
  }

  switch (symbol) {
    case "+":
      add(a, b);
      break;
    case "-":
      minus(a, b);
      break;
    case "/":
      divide(a, b);
      break;
    case "*":
      multi(a, b);
      break;
    default:
      return alert("올바른 기호를 입력해 주세요.");
  }
}

/**
 * 입력된 매개 변수 만큼 총합계산하기
 * @param {number} numbers - 숫자 값
 */
function showTotal() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);

/**
 * 너비를 계산해 주는 함수
 * @param {number} _width
 * @param {number} _height
 * @returns {number}
 * -- 함수사용 예 --
 * ```js
 *  const result = calcRect(5, 4);
 * ```
 */
function calcRect(_width = 0, _height = 0) {
  // 추후에 무수하게 예외처리 코드가 작성이 된다.
  // 업데이트 진행
  return _width * _height;
}
// 함수 호출
const resul = calcRect(5, 4);
console.log(result);

const add = function () {};

function calcFunc(_fn) {
  add();
}

calcFunc(add);

function hi(_name) {
  console.log("name + 안녕");
}

hi("피채린");

function say() {
  console.log("안녕");
}
const say = function () {
  console.log("안녕");
};
const sayArrow = () => {
  console.log("안녕");
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = () => console.log("안녕");

const Person = {
  name: "아이유",
  say: function () {
    console.log(this); // Person 객체
    console.log(this.name); // 아이유
  },
  sayArrow: () => {
    console.log(this); // window
    console.log(this.name); // window.name undefined
  },
};

Person.say();
Person.sayArrow();

function Person(_name) {
  this.name = _name;
  this.say = function () {
    console.log(this.name + " 안녕하세요.");
  };
  console.log(this);
  console.log(this.name);
}
const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();

// 동물
class Animal {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}

// 강아지
class Dog extends Animal {
  constructor() {
    super(); // new Animal();
    this.name = "강아지";
  }
}

new Dog();

// 새
class Bird {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
/ 동물
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
}
const a = new Animal(2, 1);
console.log(a);
// 강아지
class Dog extends Animal {
  constructor() {
    super(2, 5); // new Animal();
    this.name = "강아지";
  }
}

const b = new Dog();
console.log(b);

// 새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
  }
}
const c = new Bird();
console.log(c);

// 동물
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
  speak() {
    console.log("소리를 내요");
  }
}
const a = new Animal(2, 1);
a.speak();

console.log(a);
// 강아지
class Dog extends Animal {
  constructor() {
    super(2, 5); // new Animal();
    this.name = "강아지";
  }
  speak() {
    console.log("멍멍이라고 소리를 내요");
  }
}

const b = new Dog();
b.speak();
console.log(b);

// 새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
    this.city = "대구";
  }
  speak() {
    console.log("짹짹이라고 소리르 ㄹ내요");
  }
}
const c = new Bird();
c.speak();
console.log(c);

class Animal {
  // 안적으면 public (기본값)
  eye;
  // #을 적으면 private
  #nose;

  constructor(eye, nose) {
    this.eye = eye;
    this.#nose = nose;
  }
}

class Dog extends Animal {
  constructor() {
    super(2, 5);
  }
}

const a = new Dog();
console.log(a);
console.log(a.eye);
console.log(a.#nose); // private 오류

class MathCalc {
  constructor() {}
  static add(a, b) {}
  static minus(a, b) {}
}
MathCalc.add(3, 4);
MathCalc.minus(3, 4);

const a = new MathCalc();
a.add(3, 4); // 에러:생성된 객체로 접근 불가

class PersonInfo {
  constructor(_name, _age) {
    this.nickName = _name;
    this.age = _age;
    this.job = "singer";
  }
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);

