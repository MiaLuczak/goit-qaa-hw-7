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
