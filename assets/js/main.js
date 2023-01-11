const num = document.getElementById('num');


console.log(num);

function plusOne() {
    num.innerHTML++;
}

function minusOne() {
    num.innerHTML--;
}

function plusTen() {
    let parsedValue = parseInt(num.innerHTML);
    num.innerHTML = parsedValue + 10;
}

function minusTen() {
    num.innerHTML -= 10;
}

function plusHundred() {
    let parsedValue = parseInt(num.innerHTML);
    num.innerHTML = parsedValue + 100;
}


function minusHundred() {
    numValue = num.innerHTML -= 100;
    console.log(numValue);
}

function reset() {
    let reset = 0;
    num.innerHTML = reset;
}

function multiplicateTwo() {
    num.innerHTML *= 2;
}