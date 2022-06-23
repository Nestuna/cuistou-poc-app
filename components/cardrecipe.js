import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardRecipe = (props) => {
  const { item } = props;
  const [infos, setInfos] = useState({})
  const [expanded, setExpanded] = useState(false);
  const parse = require("html-react-parser");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  useEffect(() => {
    const fetchInfos = async () => {
      const res = await fetch(`http://localhost:3000/api/recipes/${item.id}/information`)
      const infos = await res.json()
      setInfos(infos)
    }
    fetchInfos()
  }, [])

  console.log(infos);
  return (
    <Card
      sx={{
        maxWidth: 900,
        maxHeight: expanded ? "auto" : 240,
        display: "flex",
        mb: "1em",
      }}
    >
      <Box
        sx={{
          padding: 3,
          maxHeight: expanded ? "auto" : 240
        }}
      >
        <Box sx={{ padding: "auto" }}>
          <img
            class="recipe-image"
            src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`}
          ></img>
        </Box>
      </Box>
      <Box sx={{ flexDirection: "column" }}>
        <CardHeader title={item.title} />
        <CardContent>
          <Box>
            <Typography
              sx={{ maxHeight: 60, overflow: "hidden" }}
              variant="body2"
            >
              { parse(infos.summary) }
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CardActions disableSpacing>
                <IconButton aria-label="expand">
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </IconButton>
              </CardActions>
            </Box>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Instructions :</Typography>
            <Typography>{ parse(infos.instructions) }</Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};

export default CardRecipe;
