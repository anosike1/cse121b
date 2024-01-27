// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);
let fullName = "Victory Anosike";


// 🔍 Part 2 error
const currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`);
const currentYear = currentDateAndTime.getFullYear();

const profilePicture = 'images/yourprofileimagename.png';

imageElement = document.querySelector ('img');
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute ('alt',`Profile image of ${fullName}`)

const nameElement = document.getElementById('name');
nameElement = `<strong>${fullName}`;

const foodElement = document.getElementById('food');
foods = ['Rice', 'Beans', 'Salad'];
foodElement.innerHTML += `<br>${foods}`;
let newFood = "Spaghetti";
foods.push (newFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop()
foodElement.innerHTML += `<br>${foods}`;


const yearElement = document.querySelector('#year');
yearElement.textContent (currentYear);



// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	for (let aNumber in theNumbers) {
		sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
	}
	return sum
}
