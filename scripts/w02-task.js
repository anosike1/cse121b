/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Victory Anosike";
const currentYear = new Date().getFullYear();
const profilePicture = "images/myimage.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
foods = ['Rice', 'Beans', 'Salad'];
foodElement.innerHTML += `<br>${foods}`;
let newFood = "Spaghetti";
foods.push (newFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop()
foodElement.innerHTML += `<br>${foods}`;
