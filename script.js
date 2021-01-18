"use strict";
var input = document.getElementById("input");
function CalcNumbers(result){
    document.getElementById("input").value += result;
}
function CountResult() {
    input.value = eval(input.value);
}

function ClearInput() {
    input.value = "";
}