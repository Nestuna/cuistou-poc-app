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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { item } = props;
  return (
    <Card sx={{ maxWidth: 900, maxHeight: 200, display: "flex" }}>
      <Box
        sx={{
          padding: 3,
        }}
      >
        <Box sx={{ padding: "auto" }}>
          <img
            src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`}
          ></img>
        </Box>
      </Box>
      <Box sx={{ flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardHeader title={item.title} />
          <Box>
            {item.cheap ? (
              <AttachMoneyIcon sx={{ color: "var(--primary)" }} />
            ) : (
              <Box sx={{ padding: 3 }}>
                <AttachMoneyIcon sx={{ color: "var(--primary)" }} />
                <AttachMoneyIcon sx={{ color: "var(--primary)" }} />
              </Box>
            )}
          </Box>

          <CardActions onClick={console.log("cliqué")} disableSpacing>
            <IconButton
              aria-label="add to favorites"
              sx={{ color: "var( --warn)" }}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Box>

        <CardContent>
          <Box>
            <Typography
              sx={{ maxHeight: 60, overflow: "hidden" }}
              variant="body2"
              color="text.secondary"
            >
              {item.summary}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton aria-label="expend">
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </IconButton>
            </Box>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Instruction:</Typography>
            <Typography paragraph>{item.instructions}</Typography>
            
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};

export default CardRecipe;
