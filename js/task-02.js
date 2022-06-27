const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLiEl = ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.classList.add('item');
  // console.log(newIngredient);
  return newIngredient;
  });

  const ingredientsList = document.querySelector('#ingredients');
  ingredientsList.append(...ingredientsLiEl);
  console.log(ingredientsList);  
