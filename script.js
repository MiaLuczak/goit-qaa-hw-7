// Exercise 1
//  Part 1
const categories = document.querySelectorAll('ul#categories li.item');
const numberOfCategories = categories.length;
console.log(`Number of categoires: ${numberOfCategories}`);

//  Part 2
const categoryName = document.querySelectorAll('ul#categories li.item h2');
const arrayOfCategoryNames = [];

categoryName.forEach((el) => arrayOfCategoryNames.push(el.textContent));
// // Alternative loop `for ... of ... `
// for (const x of categoryName) {
//   arrayOfCategoryNames.push(x.textContent);
// }

console.log(arrayOfCategoryNames);
