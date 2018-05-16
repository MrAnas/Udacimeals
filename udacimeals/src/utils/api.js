const API_ID = 'cbdf55d9'
const APP_KEY = 'f3298b01c012c4a65bb2b4cdb8b5068f'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}