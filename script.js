// Exercise 1
//  Part 1
const categories = document.querySelectorAll('ul#categories li.item');
const numberOfCategories = categories.length;
console.log(`Number of categoires: ${numberOfCategories}`);

//  Part 2
// Category names
const categoryName = document.querySelectorAll('ul#categories li.item h2');
const arrayOfCategoryNames = [];

categoryName.forEach((el) => arrayOfCategoryNames.push(el.textContent));
// // Alternative loop `for ... of ... `
// for (const x of categoryName) {
//   arrayOfCategoryNames.push(x.textContent);
// }

// Category size
const categoryElements = document.querySelectorAll('ul#categories li.item ul');
const arrayOfCategorySize = [...categoryElements].map(
  (element) => element.children.length
);

// Message function:

function message() {
  let _name = arrayOfCategoryNames;
  let _size = arrayOfCategorySize;
  for (let i = 0; i < arrayOfCategoryNames.length; i++) {
    _name = arrayOfCategoryNames[i];
    _size = arrayOfCategorySize[i];
    console.log(`
        Category: ${_name}
        Elements: ${_size}`);
  }
}
