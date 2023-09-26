const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const total = document.querySelector('#total'); 

function sum() {
    total.innerHTML = +n1.value + +n2.value
};

function sub() {
    total.innerHTML = parseInt(n1.value) - parseInt(n2.value)
};

function mul() {
    total.innerHTML = parseInt(n1.value) * parseInt(n2.value)
};

function div() {
    total.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
};