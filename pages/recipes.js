import * as React from "react";
import { useState, useEffect } from "react";
import CardRecipe from "../components/cardrecipe";

import { Container } from "@mui/material";

const Recipes = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [recettes, setRecettes] = useState({ recipes: [] });

  const getSeason = () => {
    const seasons = {
      winter: [12,1,2],
      autumn: [9,10,11],
      summer: [6,7,8],
      spring: [3,4,5]
    }
    const currentMonth = new Date().getMonth() + 1
    for (const season in seasons) {
      if (seasons[season].includes(currentMonth)) {
        return season
      }
    }
  }



  useEffect(() => {
    async function fetchFruitsAndVegetables() {
      const res = await fetch(`http://localhost:3000/api/fruits`)
      const fruits = await res.json()

      const res2 = await fetch(`http://localhost:3000/api/legumes`)
      const vegetables = await res2.json()

      const currentSeason = getSeason();
      let currentMonths = []
      switch(currentSeason) {
        case 'winter':
          currentMonths = ['January', 'February', 'December']
          break;
        case 'autumn':
          currentMonths = ['September', 'October', 'November']
          break;
        case 'summer':
          currentMonths = ['June', 'July', 'August']
          break;
        case 'spring':
          currentMonths = ['March', 'April', 'May']
          break;
        default:
          currentMonths =  ['June', 'July', 'August']
      }
      const seasonFruits = fruits.filter(fruit => {
        for (const month of currentMonths) {
          return fruit.month.includes(month);
        }
      })
      const seasonVegetables = vegetables.filter(vegetable => {
        for (const month of currentMonths) {
          return vegetable.month.includes(month);
        }
      })

      let fruitsNames = []
      for (const fruit of seasonFruits){
        fruitsNames.push(fruit.name)
      }
      let vegetablesNames= []
      for (const vegetable of seasonVegetables){
        vegetablesNames.push(vegetable.name)
      }
      const ingredients = [...vegetablesNames, ...fruitsNames]
      const ingredientsStr = ingredients.join(',').toLowerCase()
      const res3 = await fetch('http://localhost:3000/api/recipes?ingredients=' + ingredientsStr)
      const recipes = await res3.json()


      console.log(recipes)
      setRecettes({ recipes })
    }
     fetchFruitsAndVegetables().catch(err => console.error(err))
  }, [])

  return (
    <Container sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      {recettes.recipes.map((value, key) => {
        return <CardRecipe item={value} />;
      })}
    </Container>
  );
};
export default Recipes;
