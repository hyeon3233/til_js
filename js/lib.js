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
