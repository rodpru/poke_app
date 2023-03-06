import * as React from "react";
import CardComponent from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Card({ pokemon }) {
  return (
    <CardComponent sx={{ maxWidth: { xs: "100%", sm: "50%", md: "30%" } }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={pokemon.sprites.front_default}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardComponent>
  );
}
