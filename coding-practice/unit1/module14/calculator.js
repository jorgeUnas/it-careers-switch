
function equivalentCheck(){
    if(parseInt(document.querySelector('#equivalent').value)){
        document.querySelector('#equivalent').value = 0;
        document.querySelector('#result').value = 0;
    }
}

function input(x) {
    equivalentCheck()

    /*let y = document.querySelector('#result').value;
    if(document.querySelector('#decimalVal').value == 0){
        x += y*10; // multiply text input by 10 and add x
        document.querySelector('#result').value = x;
    }else{ // if decimal is true
        let decimalCount = parseInt(document.querySelector('#decimalVal').value);
        if(decimalCount == 1){
            x *= 1/10;
            y += x;
            document.querySelector('#result').value = y;
        }else{
            document.querySelector('#result').value += x;
        }
        decimalCount++;
        document.querySelector('#decimalVal').value = decimalCount;
    }*/
    if(document.querySelector('#result').value == 0){
        return document.querySelector('#result').value = x;
    }else{
        return document.querySelector('#result').value += x;
    }
}
function allClear(){
    document.querySelector('#result').value = 0;
    document.querySelector('#operand').value = "";
    document.querySelector('#operation').value = 0;
    document.querySelector('#equivalent').value = 0;
}
function plusminus(){
    document.querySelector('#result').value *= -1;
}
function percent(){
    document.querySelector('#result').value *= 0.01;
}
function square(){
    let x = document.querySelector('#result').value;
    x *= x;
    document.querySelector('#result').value = x;
}
function decimalPoint(){
    if (document.querySelector('#decimalVal').value == 0){ // prevents multiple decimals
        document.querySelector('#decimalVal').value = 1;
    }
    if(document.querySelector('#operation').value){ // if that is not an empty string
        document.querySelector('#result').value = 0;
    }
}
function operandCheck(){
    if(document.querySelector('#operand').value == ""){
        document.querySelector('#operand').value = document.querySelector('#result').value;
        document.querySelector('#equivalent').value = 1;
    }else{
        operatorCheck();
    }
}
function operatorCheck(){
    let a = +document.querySelector('#operand').value;
    let b = +document.querySelector('#result').value;
    switch (+document.querySelector('#operation').value){
        case 1:
            a += b;
            break;
        case 2:
            a -= b;
            break;
        case 3:
            a *= b;
            break;
        case 4:
            a /= b;
            break;
    }
    document.querySelector('#operand').value = a;
    document.querySelector('#result').value = a;
    document.querySelector('#equivalent').value = 1;
}
function operators(x){
    switch (x){
    case 1:
        document.querySelector('#operation').value = 1;
        break;
    case 2:
        document.querySelector('#operation').value = 2;
        break;
    case 3:
        document.querySelector('#operation').value = 3;
        break;
    case 4:
        document.querySelector('#operation').value = 4;
        break;
    }
    operandCheck();
} 
function equals(){
    operators(+document.querySelector('#operation').value);
    document.querySelector('#result').value = document.querySelector('#operand').value;
    document.querySelector('#operand').value = "";
    document.querySelector('#equivalent').value = 1;
}