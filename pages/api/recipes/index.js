export default async (req, res) => {
  const apiKey = process.env.SPOONACULAR_API_KEY
  const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients?'
  const url = baseUrl + new URLSearchParams({
    apiKey,
    ranking: 1,
    number: 2
  })
  const ingredientsArr = req.query.ingredients.split(',')
  const ingredientsStr = ingredientsArr.join(',+')
  const query = `&ingredients=${ingredientsStr}`
  const recipes = await fetch(url + query)
  res.json(await recipes.json())
};
