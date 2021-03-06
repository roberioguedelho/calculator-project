
const input = document.getElementById('numeros');

let total = 0; 
var igual = "";
var igualFoiClicado = false;

function clickNumber(texto) {
    let contemPonto = input.value.includes('.')

    if (igualFoiClicado==true) {
        input.value = "";
    }
    
    if (!contemPonto && texto =='.') {   

        if (input.value == "") {
            input.value = "0."
            igualFoiClicado=false;
        } else {
            input.value += texto;
            igualFoiClicado=false;
        }       
    } 

    if (texto != '.') {
        input.value += texto;
        igualFoiClicado=false;
    }

}

function limpar() {
    input.value = "";
     total = 0; 
    igual = "";
    igualFoiClicado = false;

}

function operacoes(operacao) {


    if (operacao == '+') {
        total += Number(input.value);
        input.value = "";
        igual = "+";
        igualFoiClicado = false;

    } else if ( operacao == '-' ) {

    } else if ( operacao == 'x' ) {

    } else if (operacao == '/' ) {
    } 
}


function funcaoIgual() {
    if (input.value != "") {
        if (igual == '+'){
            total += Number(input.value);
            input.value = total;
            igual = "";
            total = 0;
        }  
    } else {
        input.value = total;
    }

    igualFoiClicado = true;
}
