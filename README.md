# Cuistou
<div>
  <img src="https://cdn.discordapp.com/attachments/918056502730833922/984549560879808532/Logo_restaurant_illustre_nude_style_vintage.png"
       style="width: 300px; float:left; padding-right:1em"/>
<p>
  Cuistou est une application visant à proposer des recettes en accords avec les fruits et legumes de saisons. Elle permet  d'avoir la liste de ses mêmes fruits et legumes et avoir une gestion des recettes favorites.

  Là où cette application se démarque des autres, c'est qu'elle permet d'afficher les commerçants locaux aux alentours par géolocalisation, afin de savoir où trouvers ces fruits et legumes, tout en favorisant le commerce local.
</p>
</div>
<br><br><br><br>

***
## APIs et sources tierces
Pour les fruits et legumes de saisons, nous n'avons malheureusement pas trouver d'API public. Ainsi, nous utilisons [la page de référence de l'Association des Diététiciens du Royaume-Uni](https://www.bda.uk.com/food-health/your-health/sustainable-diets/seasonal-fruit-and-veg-a-handy-guide.html), avec laquelle nous utilisez la technique du scraping afin d'extraire les informations utiles.

Pour les recettes, nous utilisons l'API public [spoonacular](https://spoonacular.com/food-api/docs).

## Stack
- Next.js
- MUI

## Lancer l'app

Après avoir cloner le projet, installer les paquets necessaires:
``` $ npm install ```

Puis lancer le projet comme une application react classique:
``` $ npm run start ```