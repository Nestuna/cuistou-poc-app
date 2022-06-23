export default async (req, res) => {
  const apiKey = process.env.SPOONACULAR_API_KEY
  const baseUrl = `https://api.spoonacular.com/recipes/${req.query.id}/information?`
  const url = baseUrl + new URLSearchParams({ apiKey })
  const information = await fetch(url)
  res.json(await information.json())
};
