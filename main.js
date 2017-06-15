const clearBtn = document.querySelector(".clearBtn");
const displayBtn = document.querySelector(".displayBtn")
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightbtn");
const nineBtn = document.querySelector(".ninebtn");
const dividerBtn = document.querySelector(".dividerBtn");
const sixBtn = document.querySelector(".sixBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const fourBtn = document.querySelector(".fourBtn");
const mulitplyBtn = document.querySelector(".mulitplyBtn");
const threeBtn = document.querySelector(".threeBtn");
const twoBtn = document.querySelector(".twoBtn");
const oneBtn = document.querySelector(".oneBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const zeroBtn = document.querySelector(".zeroBtn");
const decimalBtn = document.querySelector(".decimalBtn");
const equalBtn = document.querySelector(".equalBtn");
const addBtn = document.querySelector(".addBtn");
let btnList = document.querySelectorAll(".squares");


for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i];

  btn.addEventListener("onClick",function(){
    if(btn.innerHTML == "=") {
      let equation = displayBtn.innerHTML;
      equation = equation.replace("x", "*");
      displayBtn.innerHTML = eval(equation);

      } else if(btn.innerHTML == "C") {
     displayBtn.innerHTML = "";


  } else {

    displayBtn.innerHTML += btn.innerHTML;

  }



});
}
