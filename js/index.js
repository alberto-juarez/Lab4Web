var input =  "";
var result = 0;

document.getElementById("addButton").addEventListener('click', operador("+"));
document.getElementById("substractButton").addEventListener('click', operacion("-"));
document.getElementById("multiplicationButton").addEventListener('click',operacion("*"));
document.getElementById("divisionButton").addEventListener('click',operacion("/"));

// function add(){
//   var num = document.getElementsByClassName("inputNumber")[0].value;
//   input += num + ' + ';
//   document.getElementsByClassName("inputNumber")[0].value = "";
//
// }
//
// function substract(){
//   var num = document.getElementsByClassName("inputNumber")[0].value;
//   input += num + ' - ';
//   document.getElementsByClassName("inputNumber")[0].value = "";
//
// }
//
//
// function multiply(){
//   var num = document.getElementsByClassName("inputNumber")[0].value;
//   input += num + ' * ';
//   document.getElementsByClassName("inputNumber")[0].value = "";
//
// }
//
// function divide(){
//   var num = document.getElementsByClassName("inputNumber")[0].value;
//   input += num + ' / ';
//   document.getElementsByClassName("inputNumber")[0].value = "";
//
// }

function operacion(x){
      var num = document.getElementsByClassName("inputNumber")[0].value;
      switch(x){
        case "+":
            input += num + ' + ';
            console.log(input);
        break;

        case "-":
            input += num + ' - ';
            console.log(input);
        break;

        case "*":
            input += num + ' * ';
            console.log(input);
        break;

        case "/":
            input += num + ' / ';
        break;
      }

      document.getElementsByClassName("inputNumber")[0].value = "";
      console.log(input);
}

document.getElementsByClassName("resetButton")[0].addEventListener('click', (event) =>{
    input = "";
    document.getElementsByClassName("inputNumber")[0].value = input;
    document.getElementById("resultValue").value = "";
    document.getElementsByClassName("inputNumber")[0].value = "";
    document.getElementById("logInformation").value += input;

});

document.getElementsByClassName("equalButton")[0].addEventListener('click', (event) => {
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    input.replace(/\s/g, "");
    result = eval(input);
    document.getElementById("resultValue").value = result;
    input = input + " = " + result + "\n";
    document.getElementById("logInformation").value += input;
    document.getElementsByClassName("inputNumber")[0].value = "";
    input = "";

});
