import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavourites,
  setFavourites,
} from "../store/slices/favouritesSlice";
import CardComponent from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";

export default function Card({ pokemon }) {
  const favourites = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  useEffect(() => {
    let itemsFromLS = JSON.parse(localStorage.getItem("favourites"));
    if (favourites.length) {
      favourites.map((item) => {
        if (item === pokemon) setActive(true);
      });
    } else if (itemsFromLS) {
      console.log(itemsFromLS);
      itemsFromLS.map((item) => {
        if (item === pokemon) setActive(true);
      });
    } else setActive(false);
  }, [active]);
  const handleFavourites = (pokemon) => {
    if (!favourites.length) dispatch(setFavourites(pokemon));
    if (favourites.length) {
      favourites.map((item) => {
        console.log(item);
        console.log(pokemon);
        if (item === pokemon) {
          console.log("entrou no if");
          dispatch(removeFromFavourites(pokemon));
        } else {
          dispatch(setFavourites(pokemon));
        }
      });
    }
    setActive(!active);
  };

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "10%",
          alignItems: "center",
        }}
      >
        <Button size="small">Saber Mais</Button>

        {active ? (
          <StarIcon onClick={() => handleFavourites(pokemon.name)} />
        ) : (
          <StarBorderOutlinedIcon
            onClick={() => handleFavourites(pokemon.name)}
          />
        )}
      </Box>
    </CardComponent>
  );
}
