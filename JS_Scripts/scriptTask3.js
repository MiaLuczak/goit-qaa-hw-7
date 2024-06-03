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
