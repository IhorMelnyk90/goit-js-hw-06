const ulCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:',ulCategoriesEl.length);

ulCategoriesEl.forEach(function(category){
    console.log('Category:',category.firstElementChild.textContent);
    console.log('Elements:',category.lastElementChild.children.length);
});
