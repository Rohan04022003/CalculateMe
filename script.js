function appendToValue(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    document.getElementById("result").value = eval(
      document.getElementById("result").value
    );
  } catch (error) {
    document.getElementById("result").value = "error";
  }
}

function backSpaceValue() {
  let result1 = document.getElementById("result").value;
  document.getElementById("result").value = result1.slice(0, -1);
}

function allClear() {
  document.getElementById("result").value = "";
}
