// expand content

const categoriesSection = document.querySelector('#categories .section-header');
const categoriesContent = document.querySelector('.categories-content');
const categoriesExpandButton = document.querySelector('#categories .section-header .expand-button');

categoriesSection.addEventListener('click', (e) => {
   categoriesContent.classList.toggle('show');

   categoriesExpandButton.classList.toggle('upside-down');
});