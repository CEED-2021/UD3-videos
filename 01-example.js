function checkInput(a,b) {
    return typeof sum(a,b) === 'number';
}






let num1 = '0'; 
let num2 = 2;

if(!checkInput(num1, num2)) {
    console.log('Please enter numbers');
    return;
}

// -------------------------------------

function sum(n1, n2) {
    return n1 + n2
}

num1 = '0'
num2 = 2

console.log(`Sum of ${num1} and ${num2} is ${sum(num1,num2)}`);
