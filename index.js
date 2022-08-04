//first take or get values from html page using document.queryselector
let screen = document.querySelector("#screen");
let button = document.querySelectorAll(".btn");
let equals = document.querySelector(".btn_equals");
let clear = document.querySelector(".btn_clr");

//there are many buttons so we have to go through all buttons so here we use for each loop
button.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

//created an event for equals and clear buttons
equals.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "";
  } else {
    screen.value = eval(screen.value);
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});
