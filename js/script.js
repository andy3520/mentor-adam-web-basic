var numberAElement = document.getElementById("numberA");
var numberBElement = document.getElementById("numberB");
var resultElement = document.getElementById("result");

function sumNumber() {
  var numberA = parseInt(numberAElement.value);
  var numberB = parseInt(numberBElement.value);
  
  var result = numberA + numberB;

  resultElement.innerText = "Result is:" + result;
}
