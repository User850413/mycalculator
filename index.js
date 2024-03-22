// 숫자패드 클릭 시 값 가져오기
// 숫자패드
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");
const n6 = document.querySelector(".n6");
const n7 = document.querySelector(".n7");
const n8 = document.querySelector(".n8");
const n9 = document.querySelector(".n9");
const nl = document.querySelector(".nl");
const n0 = document.querySelector(".n0");
const nr = document.querySelector(".nr");

// 연산기호
const o1 = document.querySelector(".o1");
const o2 = document.querySelector(".o2");
const o3 = document.querySelector(".o3");
const o4 = document.querySelector(".o4");

// 결과
const result = document.querySelector(".result");

// 리셋
const reset = document.querySelector(".reset");

// 필드
const viewField = document.querySelector(".view__field");
const viewResult = document.querySelector(".view__result");
var field = viewField.innerHTML;
function rebase() {
  viewField.innerHTML = field;
}

// 숫자 클릭 시
// click 이벤트 메서드 프로퍼티에 textContent 가져오기
function add(n) {
  field = field + n.target.textContent;
  rebase();
}

// 요소에 넣을 click 이벤트 함수
function addEvent(prop) {
  prop.addEventListener("click", add);
}

// 여러 숫자 선택(cal__btns)
addEvent(nl);
let cal__btns = document.querySelectorAll(".numpad");

// 선택한 여러 숫자에 적용(for 문)
for (let btn of cal__btns) {
  addEvent(btn);
}

// 연산기호 클릭 시
// 연산기호 삽입 함수
let operations = [];

// 연산기호 기본 동작 함수
let addOperation = function (op) {
  if (!operations.includes(op)) {
    operations.push(op);
  }
  if (field !== "") {
    for (var operation of operations) {
      if (operation == field[field.length - 1]) {
        field = field.slice(0, -1);
      }
    }
    field = field + op;
  }
  rebase();
};

//연산기호 추가 함수
function addOp(op) {
  addOperation(op.target.textContent);
}
let ops = document.querySelectorAll(".operation");
function addEventOperation(op) {
  op.addEventListener("click", addOp);
}

// C 제외 추가
for (let op of ops) {
  if (op.textContent !== "C") {
    addEventOperation(op);
  }
}

// C 클릭 시 backspace
o4.addEventListener("click", () => {
  field = field.slice(0, -1);
  rebase();
});

//reset, result
reset.addEventListener("click", () => {
  field = "";
  viewResult.innerHTML = "=";
  rebase();
});
result.addEventListener("click", () => {
  try {
    viewResult.innerHTML = "=";
    viewResult.innerHTML = viewResult.innerHTML + eval(field);
    field = "";
    rebase();
  } catch (err) {
    console.log(err);
  }
});
