// ====== Exercise 2 ======
// Provided Array:
const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

// Getting HTML Element (#ingredients list) using querySelector
const list = document.querySelector('#ingredients');
// Creating a forEach loop which creates a new <li> element and adds .item class to it,
// then adding single item from ingredients array to it and put them in end of #ingredients lists
ingredients.forEach((igredient) => {
	const listElement = document.createElement('li');
	listElement.classList.add('item');
	listElement.textContent = igredient;
	list.appendChild(listElement);
});
