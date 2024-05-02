let oyna = document.querySelector(".oyna");

function AddToInput(input) {
  oyna.value += input;
}
function clearAll() {
  oyna.value = "";
}
function calculator() {
  try {
    oyna.value = eval(oyna.value);
  } catch (error) {
    oyna.value = "Error!";
  }
}
