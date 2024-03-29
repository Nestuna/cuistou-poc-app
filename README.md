# Cuistou
<div align="center">
  <img src="https://cdn.discordapp.com/attachments/918056502730833922/984549560879808532/Logo_restaurant_illustre_nude_style_vintage.png"
       style="width: 300px; float:left; padding-right:1em"/>
</div>
  Cuistou est une application visant à proposer des recettes en accord avec les fruits et légumes de saisons. Elle permet  d'avoir la liste de ses mêmes fruits et légumes et avoir une gestion des recettes favorites.
  Dans un futur proche nous prevoyons aussi d'afficher les commerçants locaux aux alentours par géolocalisation, afin de savoir où trouver ces fruits et légumes, tout en favorisant le commerce local.

***
## APIs et sources tierces
Pour les fruits et légumes de saisons, nous n'avons malheureusement pas trouver d'API public. Ainsi, nous utilisons [la page de référence de l'Association des Diététiciens du Royaume-Uni](https://www.bda.uk.com/food-health/your-health/sustainable-diets/seasonal-fruit-and-veg-a-handy-guide.html), avec laquelle nous utilisons la technique du scraping afin d'extraire les informations utiles.

Pour les recettes, nous utilisons l'API public [spoonacular](https://spoonacular.com/food-api/docs).
Pour la démonstration, seulement 5 recettes seront affichées. Nous sommes malheuresement limité à 150 requêtes par jour.

## Stack
- Next.js
- MUI

## Lancer l'app

Après avoir cloner le projet, rentrer votre clé d'API de spoonacular dans un fichier .env.local:
```
$ cp .env.local.dist .env.local
 ```
```
// .env.local

SPOONACULAR_API_KEY=your-api-key12345
```

Installer les paquets necessaires:
``` $ npm install ```

Puis lancer le projet comme une application react classique:
``` $ npm run start ```
