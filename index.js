let count = 0;

function update() {
  let change_clr = document.getElementById("result");
  let clr = parseInt(change_clr.textContent);
  if (clr < 0) {
    change_clr.style.color = "red";
  } else if (clr == 0) {
    change_clr.style.color = "black";
  } else {
    change_clr.style.color = "green";
  }
}

document.getElementById("decrease").onclick = function () {
  count -= 1;
  document.getElementById("result").innerHTML = count;
  update();
};

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("result").innerHTML = count;
  update();
};
document.getElementById("increase").onclick = function () {
  count += 1;
  document.getElementById("result").innerHTML = count;
  update();
};
