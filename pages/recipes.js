import * as React from "react";
import { useState, useEffect } from "react";
import CardRecipe from "../components/cardrecipe";

import { Container } from "@mui/material";

const recipeApi =
  "https://api.spoonacular.com/recipes/random?number=2&apiKey=6301c8bca21947bd87b7838ee782a68a&includeNutrition=true.";

const Recipes = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [recettes, setRecettes] = useState({ recipes: [] });
  const [id, setId] = useState([]);

  useEffect(() => {
    fetch(recipeApi).then(async (res) => {
      const data = await res.json();
      setRecettes(data);
    });
  }, []);

  // const addFavorite = (recipe) => {
  //   const idRecipe = recipe.id;
  //   const newId = [...id, idRecipe];
  //   setId(newId);
  // };

  return (
    <Container>
      {recettes.recipes.map((value, key) => {
        return <CardRecipe item={value} />;
      })}
    </Container>
  );
};
export default Recipes;
