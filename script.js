// ====== Exercise 1 ======
// ===== Part 1
const categories = document.querySelectorAll('ul#categories li.item');
const numberOfCategories = categories.length;

// ===== Part 2
// == Category names
const categoryName = document.querySelectorAll('ul#categories li.item h2');
const arrayOfCategoryNames = [];

categoryName.forEach((el) => arrayOfCategoryNames.push(el.textContent));
// // Alternative loop `for ... of ... `
// for (const x of categoryName) {
//   arrayOfCategoryNames.push(x.textContent);
// }

// == Category size
const categoryElements = document.querySelectorAll('ul#categories li.item ul');
const arrayOfCategorySize = [...categoryElements].map(
	(element) => element.children.length
);

// // ===== Message functions:

// function messageCategoriesElements() {
// 	let _name = arrayOfCategoryNames;
// 	let _size = arrayOfCategorySize;
// 	for (let i = 0; i < arrayOfCategoryNames.length; i++) {
// 		_name = arrayOfCategoryNames[i];
// 		_size = arrayOfCategorySize[i];
// 		console.log(`Category: ${_name} \nElements: ${_size}`);
// 	}
// }

// const messageTotalCategories = () =>
// 	`Number of categoires: ${numberOfCategories}`;
// console.log(messageTotalCategories());
// messageCategoriesElements();

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

const list = document.querySelector('#ingredients');
ingredients.forEach((igredient) => {
	const listElement = document.createElement('li');
	listElement.classList.add('item');
	listElement.textContent = igredient;
	list.appendChild(listElement);
});

// ====== Exercise 3 ======
// Provided Array:
const images = [
	{
		url: '<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: '<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: '<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>',
		alt: 'Group of Horses Running',
	},
];

const galleryList = document.querySelector('.gallery');

images.forEach(({ url, alt }) => {
	let src = '';
	if (url.startsWith('<') && url.endsWith('>')) {
		src = url.slice(1, url.length - 1);
	}
	galleryList.insertAdjacentHTML(
		'beforeend',
		`<img src="${src}" alt="${alt}" class="image">`
	);
});

galleryList.style =
	'display: flex; justify-content: space-around; flex-flow: row wrap; padding: 0px';

const image = document.querySelectorAll('.image');
image.forEach((element) => (element.style = 'max-width: 33%; height: auto;'));
