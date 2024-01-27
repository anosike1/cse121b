/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let toAdd1 = Number(document.querySelector ('#add1').value);
    let toAdd2 = Number(document.querySelector ('#add2').value);
    document.querySelector('#sum').value = add (toAdd1, toAdd2);    
}
document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let toSub1 = Number(document.querySelector ('#subtract1').value);
    let toSub2 = Number(document.querySelector ('#subtract2').value);
    document.querySelector('#difference').value = subtract (toSub1, toSub2);    
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {return number1 * number2;}

const multiplyNumbers = () => {
    let toMult1 = Number(document.querySelector ('#factor1').value);
    let toMult2 = Number(document.querySelector ('#factor2').value);
    document.querySelector('#product').value = multiply (toMult1, toMult2);    
}
document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {return (number1 / number2);}


const divideNumbers = () => {
    let toDiv1 = Number(document.querySelector ('#dividend').value);
    let toDiv2 = Number(document.querySelector ('#divisor').value);
    document.querySelector('#quotient').value = divide (toDiv1, toDiv2);    
}
document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);


/* Decision Structure */
function calculateSubTotal () {
    let subtot = Number(document.querySelector('#subtotal').value);
    let discount = document.querySelector ('#member');
    if (discount.checked) {
        subtot *= 0.8;
    }
    output = document.querySelector ('#total');
    output.innerHTML = subtot;
}

document.querySelector('#getTotal').addEventListener ('click', calculateSubTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numbersArray.filter (odd => odd%2==1);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbersArray.filter (even => even%2==0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbersArray.reduce ((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numbersArray.map (number => number*2);

/* Output Sum of Multiplied by 2 Array */
let multArray = numbersArray.map (number => number*2);
document.getElementById('sumOfMultiplied').innerHTML = multArray.reduce ((sum, number) => sum + number);