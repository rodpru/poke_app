import * as React from "react";
import CardComponent from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export default function Card({ pokemon }) {
  console.log(pokemon, "card");
  return (
    <CardComponent sx={{ width: { xs: "100%", md: "30%" } }}>
      <CardMedia
        component="img"
        alt="Pokemon"
        height="120"
        image={pokemon.sprites.front_default}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Box>
          <Box>
            <Typography>Height: {pokemon.height}</Typography>
            <Typography>Weight: {pokemon.weight}</Typography>
          </Box>
          <Typography>Specie: {pokemon.species.name}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Saber Mais</Button>
        <Button size="small">
          <StarBorderOutlinedIcon />
        </Button>
      </CardActions>
    </CardComponent>
  );
}
