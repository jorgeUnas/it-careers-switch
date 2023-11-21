
function input(x) {
    if(document.querySelector('#result').value == 0){
        document.querySelector('#result').value = x;
    }else{
        document.querySelector('#result').value += x;
    }
}
function allClear(){
    document.querySelector('#result').value = 0;
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