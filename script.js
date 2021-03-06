
const input = document.getElementById('numeros');

var total;
var numeroDigitado;
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
    total = undefined; 
    igual = "";
    igualFoiClicado = false;
    
}

function soma() {
    if (total != undefined && input.value ==""){
        igual = "+";
        igualFoiClicado = false;
    }
    if (total == undefined && input.value != "") {
        total = Number(input.value);
        igual = "+";
        igualFoiClicado = false;
        input.value = "";
    } else {
            if (igual == "+" && input.value!=""){
                total = total + Number(input.value);
                input.value = "";
                igual = "+";
                igualFoiClicado = false;
            } else if (igual == '-' && input.value!="") {
                total = total - Number(input.value);
                input.value = "";
                igual = "+";
                igualFoiClicado = false;
            } else if (igual == 'x' && input.value!="") {
                total = total*Number(input.value);
                input.value = "";
                igual = "+";
                igualFoiClicado = false;

            } else if (igual == '/' && input.value!="") {
                total = total/Number(input.value);
                input.value = "";
                igual = "+";
                igualFoiClicado = false;

            }
    }
}

function subtracao() {
    if (total != undefined && input.value ==""){
        igual = "-";
        igualFoiClicado = false;

    }
    if (total == undefined && input.value != "") {
        total = Number(input.value);
        igual = "-";
        igualFoiClicado = false;
        input.value = "";
    } else {
        if (igual == "+" && input.value!=""){
            total = total + Number(input.value);
            input.value = "";
            igual = "-";
            igualFoiClicado = false;
        } else if (igual == '-' && input.value!="") {
            total = total - Number(input.value);
            input.value = "";
            igual = "-";
            igualFoiClicado = false;
        } else if (igual == 'x' && input.value!="") {
            total = total*Number(input.value);
            input.value = "";
            igual = "-";
            igualFoiClicado = false;
        } else if (igual == '/' && input.value!="") {
            total = total/Number(input.value);
            input.value = "";
            igual = "-";
            igualFoiClicado = false;
        }
    }
}

function multiplicacao() {
    if (total != undefined && input.value ==""){
        igual = "x";
        igualFoiClicado = false;
    }
    if (total == undefined && input.value != "") {
        total = Number(input.value);
        igual = "x";
        igualFoiClicado = false;
        input.value = "";
    } else {
        if (igual == "+" && input.value!=""){
            total = total + Number(input.value);
            input.value = "";
            igual = "x";
            igualFoiClicado = false;
        } else if (igual == '-' && input.value!="") {
            total = total - Number(input.value);
            input.value = "";
            igual = "x";
            igualFoiClicado = false;
        } else if (igual == 'x' && input.value!="") {
            total = total*Number(input.value);
            input.value = "";
            igual = "x";
            igualFoiClicado = false;

        } else if (igual == '/' && input.value!="") {
            total = total/Number(input.value);
            input.value = "";
            igual = "x";
            igualFoiClicado = false;
        }
    }
}

function divisao() {
    if (total != undefined && input.value ==""){
        igual = "/";
        igualFoiClicado = false;
    }
    if (total == undefined && input.value != "") {
        total = Number(input.value);
        console.log(total);
        igual = "/";
        igualFoiClicado = false;
        input.value = "";
    } else {
        if (igual == "+" && input.value!=""){
            total = total + Number(input.value);
            input.value = "";
            igual = "/";
            igualFoiClicado = false;
        } else if (igual == '-' && input.value!="") {
            total = total - Number(input.value);
            input.value = "";
            igual = "/";
            igualFoiClicado = false;
        } else if (igual == 'x' && input.value!="") {
            total = total*Number(input.value);
            input.value = "";
            igual = "/";
            igualFoiClicado = false;
       } else if (igual == '/' && input.value!="") {
            total = total/Number(input.value);
           input.value = "";
           igual = "/";
           igualFoiClicado = false;
        }
    }
}

function apagar() {
    if (input.value != "") {
        input.value = input.value.slice(0, -1)
    }
    if (input.value == "-") {
        input.value = "";
    }
}

function maisOuMenos() {
    if (input.value!="" && !input.value.includes("-")) {
        input.value = "-"+input.value;
    }else if (input.value!="" && input.value.includes("-")) {
        input.value = input.value.replace("-","");
    }
}

function funcaoIgual() {
if (igualFoiClicado == false){
    if (igual == '+'){
        total += Number(input.value);
        input.value = total;
        igual = "";
        total = undefined;
    } else if (igual == '-') {
        total -= Number(input.value);
        input.value = total;
        igual = "";
        total = undefined;
    } else if (igual == 'x' && input.value!="") {
        total = total * Number(input.value);
        input.value = total;
        igual = "";
        total = undefined;
    } else if (igual == 'x' && input.value==""){
        input.value = total;
        igual = "";
        total = undefined;
    } else if (igual == '/' && input.value!="") {
        total = total / Number(input.value);
        input.value = total;
        igual = "";
        total = undefined;
    } else if (igual == '/' && input.value==""){
        input.value = total;
        igual = "";
        total = undefined;
    }  
}
    igualFoiClicado = true;
}
