function calculate() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var operator = document.getElementById("operator").value;
    var output = document.getElementById("output");
  
    switch (operator) {
      case "+":
        output.innerHTML = "Result: " + (input1 + input2);
        break;
      case "-":
        output.innerHTML = "Result: " + (input1 - input2);
        break;
      case "*":
        output.innerHTML = "Result: " + (input1 * input2);
        break;
      case "/":
        output.innerHTML = "Result: " + (input1 / input2);
        break;
      default:
        output.innerHTML = "Invalid operator";
    }
  }