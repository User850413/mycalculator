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
let field = viewField.innerHTML;

n1.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "1";
  console.log(typeof viewField.innerHTML);
});
n2.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "2";
  console.log(viewField.innerHTML);
});
n3.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "3";
  console.log(viewField.innerHTML);
});
n4.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "4";
  console.log(viewField.innerHTML);
});
n5.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "5";
  console.log(viewField.innerHTML);
});
n6.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "6";
  console.log(viewField.innerHTML);
});
n7.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "7";
  console.log(viewField.innerHTML);
});
n8.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "8";
  console.log(viewField.innerHTML);
});
n9.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "9";
  console.log(viewField.innerHTML);
});
n0.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "0";
  console.log(viewField.innerHTML);
});
nl.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + "(";
  console.log(viewField.innerHTML);
});
nr.addEventListener("click", () => {
  viewField.innerHTML = viewField.innerHTML + ")";
  console.log(viewField.innerHTML);
});
o1.addEventListener("click", () => {
  if (
    viewField.innerHTML !== "" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "+" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "-" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/"
  ) {
    viewField.innerHTML = viewField.innerHTML + " + ";
  }
});
o2.addEventListener("click", () => {
  if (
    viewField.innerHTML !== "" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "+" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "-" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/"
  ) {
    viewField.innerHTML = viewField.innerHTML + " - ";
  }
});
o3.addEventListener("click", () => {
  if (
    viewField.innerHTML !== "" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "+" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "-" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/"
  ) {
    viewField.innerHTML = viewField.innerHTML + " * ";
  }
});
o4.addEventListener("click", () => {
  if (
    viewField.innerHTML !== "" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "+" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "-" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/" &&
    viewField.innerHTML[viewField.innerHTML.length - 2] !== "/"
  ) {
    viewField.innerHTML = viewField.innerHTML + " / ";
  }
});
reset.addEventListener("click", () => {
  viewField.innerHTML = "";
});
console.log();
