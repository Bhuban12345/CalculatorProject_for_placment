const input = document.getElementById("input");
console.log(input.value);
const btn0 = document.getElementById("block0");
btn0.addEventListener("click", () => {
  const x = document.getElementById("block0").innerHTML;
  input.value += x;
});
const btn1 = document.getElementById("block1");
btn1.addEventListener("click", () => {
  const x = document.getElementById("block1").innerHTML;
  input.value += x;
});
const btn2 = document.getElementById("block2");
btn2.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block2").innerHTML;
  input.value += x;
});
const btn3 = document.getElementById("block3");
btn3.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block3").innerHTML;
  input.value += x;
});
const btn4 = document.getElementById("block4");
btn4.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block4").innerHTML;
  input.value += x;
});
const btn5 = document.getElementById("block5");
btn5.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block5").innerHTML;
  input.value += x;
});
const btn6 = document.getElementById("block6");
btn6.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block6").innerHTML;
  input.value += x;
});
const btn7 = document.getElementById("block7");
btn7.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block7").innerHTML;
  input.value += x;
});
const btn8 = document.getElementById("block8");
btn8.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block8").innerHTML;
  input.value += x;
});
const btn9 = document.getElementById("block9");
btn9.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("block9").innerHTML;
  input.value += x;
});
const btn_dot = document.getElementById("dot");
btn_dot.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("dot").innerHTML;
  input.value += x;
});
const plus = document.getElementById("plus");
plus.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("plus").innerHTML;
  input.value += x;
});
const minus = document.getElementById("minus");
minus.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("minus").innerHTML;
  input.value += x;
});
const multiply = document.getElementById("multiply");
multiply.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("multiply").innerHTML;
  input.value += x;
});
const divide = document.getElementById("divide");
divide.addEventListener("click", (val) => {
  //console.log("hello");
  const x = document.getElementById("divide").innerHTML;
  input.value += x;
});
const clr = document.getElementById("clr");
clr.addEventListener("click", () => {
  input.value = "";
});
const ans = document.getElementById("ans");
ans.addEventListener("click", () => {
  let x = input.value;
  let y = eval(x);
  input.value = y;
});
