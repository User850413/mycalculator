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
n1.addEventListener("click", () => {
  field = field + "1";
  rebase();
});
n2.addEventListener("click", () => {
  field = field + "2";
  rebase();
});
n3.addEventListener("click", () => {
  field = field + "3";
  rebase();
});
n4.addEventListener("click", () => {
  field = field + "4";
  rebase();
});
n5.addEventListener("click", () => {
  field = field + "5";
  rebase();
});
n6.addEventListener("click", () => {
  field = field + "6";
  rebase();
});
n7.addEventListener("click", () => {
  field = field + "7";
  rebase();
});
n8.addEventListener("click", () => {
  field = field + "8";
  rebase();
});
n9.addEventListener("click", () => {
  field = field + "9";
  rebase();
});
n0.addEventListener("click", () => {
  field = field + "0";
  rebase();
});
nl.addEventListener("click", () => {
  field = field + "(";
  rebase();
});
nr.addEventListener("click", () => {
  field = field + ")";
  rebase();
});
// 연산기호 클릭 시
// 연산기호 삽입 함수
var operations = [];
console.log(operations);
var addOperation = function (op) {
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
// +
o1.addEventListener("click", () => {
  addOperation("+");
});
// -
o2.addEventListener("click", () => {
  addOperation("-");
});
// *
o3.addEventListener("click", () => {
  addOperation("*");
});
// c
o4.addEventListener("click", () => {
  field = field.slice(0, -1);
  rebase();
});
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
