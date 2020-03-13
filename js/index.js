var input =  "";
var result = 0;

document.getElementById("addButton").addEventListener('click',function(){ operacion(1);});
document.getElementById("substractButton").addEventListener('click',function(){ operacion(2);});
document.getElementById("multiplicationButton").addEventListener('click',function(){ operacion(3);});
document.getElementById("divisionButton").addEventListener('click',function(){ operacion(4);});


function operacion(x){
      var num = document.getElementsByClassName("inputNumber")[0].value;
      switch(x){
        case 1:
            input += num + ' + ';
        break;

        case 2:
            input += num + ' - ';
        break;

        case 3:
            input += num + ' * ';
        break;

        case 4:
            input += num + ' / ';
        break;
      }

      document.getElementsByClassName("inputNumber")[0].value = "";
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
