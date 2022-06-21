import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const recipeApi =
  "https://api.spoonacular.com/recipes/random?number=2&apiKey=6301c8bca21947bd87b7838ee782a68a&includeNutrition=true.";

const CardRecipe = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [recettes, setRecettes] = useState([]);
  const [id, setId] = useState([]);

  // useEffect(() => {
  //   fetch(recipeApi)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRecettes(data);
  //     });
  // }, []);
  // console.log(recettes.recipes[0].vegetarian)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addFavorite = (recipe) => {
    const idRecipe = recipe.id;
    const newId = [...id, idRecipe];
    setId(newId);
    console.log(id);
  };

  return (
    <Card sx={{ maxWidth: 900, maxHeight: 200, display: "flex" }}>
      <Box
        sx={{
          padding: 5,
          Width: 200,
          backgroundColor: "#FFE8BC",
        }}
      >
        <CardMedia
          sx={{ backgroundColor: "#FFE8BC" }}
          component="img"
          // height="100"
          width="40"
          image="1_18.jpg"
          alt="Gateau d'anniversaire"
        />
      </Box>
      <Box sx={{ flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardHeader
            // sx={{ backgroundColor: "#FFE8BC"}}
            //  Remplacer par recipe[0].title
            title="Gateau d'anniversaire"
            // subheader="September 14, 2016"
          />

          <CardActions onClick={console.log("cliqué")} disableSpacing>
            <IconButton aria-label="add to favorites" color="#E97F7F">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Box>

        <CardContent
        // sx={{ backgroundColor: "#FFE8BC" }}
        >
          {/* recipe[0].summary */}
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ backgroundColor: "#FFE8BC" }}>
            <Typography paragraph>Instruction:</Typography>
            <Typography paragraph>{/* recipe[0].instruction */}</Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};
export default CardRecipe;
