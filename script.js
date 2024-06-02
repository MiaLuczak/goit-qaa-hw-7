// ====== Exercise 1 ======
// ===== Part 1
// Creating querySelector to select every li.item(category) in ul#categories
// and getting lenght of acquierd node array
const categories = document.querySelectorAll('ul#categories li.item');
const numberOfCategories = categories.length;

// ===== Part 2
// == Category names
// Creating selector that acquire <h2> element (name of category) inside categeory list,
// using arrayOfCategoryNames and forEach method to export textcontent of every <h2> tag
const categoryName = document.querySelectorAll('ul#categories li.item h2');
const arrayOfCategoryNames = [];

categoryName.forEach((el) => arrayOfCategoryNames.push(el.textContent));
// // Alternative loop `for ... of ... `
// for (const x of categoryName) {
//   arrayOfCategoryNames.push(x.textContent);
// }

// == Category size
// Getting node array of ul list elements (elements of each category) inside list in ul#category
// and getting lenght of that arrays with .map method using .children to access elements inside
const categoryElements = document.querySelectorAll('ul#categories li.item ul');
const arrayOfCategorySize = [...categoryElements].map(
	(element) => element.children.length
);

// ===== Message functions:
// Function that for each iteration shows name of each category
//  and corresponding count of elements inside using Regular Expression `\n` to break a line in one console.log
function messageCategoriesElements() {
	let _name = arrayOfCategoryNames;
	let _size = arrayOfCategorySize;
	for (let i = 0; i < arrayOfCategoryNames.length; i++) {
		_name = arrayOfCategoryNames[i];
		_size = arrayOfCategorySize[i];
		console.log(`Category: ${_name} \nElements: ${_size}`);
	}
}
// Function that shows general numbers of categories
const messageTotalCategories = () =>
	`Number of categoires: ${numberOfCategories}`;
console.log(messageTotalCategories());
messageCategoriesElements();

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

// Getting access to list wth .gallery class
const galleryList = document.querySelector('.gallery');

// Creating a loop that destructurize object from 'images' array and if the url is inside angle brackets
// with slice method it cuts it from there to get valid url adress
// Then it inserts new HTML Element using .insertAdjacentHTML and tamplate string
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

// Adding CSS styles (flex) using JS
galleryList.style =
	'display: flex; justify-content: space-around; flex-flow: row wrap; padding: 0px';
// Setting max-width and height attribute for each image to fit in browser window in one row
const image = document.querySelectorAll('.image');
image.forEach((element) => (element.style = 'max-width: 33%; height: auto;'));
