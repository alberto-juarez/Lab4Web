var input =  "";
var result = 0;


function operacion(x){
  var num = document.getElementsByClassName("inputNumber")[0].value;
  input += num + x;
  document.getElementsByClassName("inputNumber")[0].value = "";
}

document.getElementById("addButton").addEventListener('click', (event) =>{
    operacion(" + ");
});

document.getElementById("substractButton").addEventListener('click', (event) =>{
    operacion(" - ");
});

document.getElementById("multiplicationButton").addEventListener('click', (event) =>{
    operacion(" * ");
});

document.getElementById("divisionButton").addEventListener('click', (event) =>{
    operacion(" / ");
});

document.getElementsByClassName("resetButton")[0].addEventListener('click', (event) =>{
    input = "";
    document.getElementsByClassName("inputNumber")[0].value = input;
    document.getElementById("resultValue").value = "";
    document.getElementsByClassName("inputNumber")[0].value = "";
    document.getElementById("logInformation").value = "";

});

document.getElementsByClassName("equalButton")[0].addEventListener('click', (event) => {
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    document.getElementsByClassName("inputNumber")[0].value = "";
    result = eval(input);
    input += " = " + result + "\n";
    document.getElementById("resultValue").value = result;
    document.getElementById("logInformation").value += input;
    input = "";
});
