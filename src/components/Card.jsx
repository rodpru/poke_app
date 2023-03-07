import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardComponent from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router";
import { element } from "prop-types";

export default function Card({ pokemon }) {
  const favourites = useSelector((state) => state.favourites.value);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  //Check if favourites exits
  useEffect(() => {
    let itemsFromLS = JSON.parse(localStorage.getItem("favourites"));
    if (!itemsFromLS && itemsFromLS < 1) {
      setActive(false);
      return;
    } else {
      itemsFromLS.map((element) => {
        if (element === pokemon.name) {
          setActive(true);
          return;
        }
      });
    }
  }, [active, favourites]);

  //navigate to individual pokemon page
  const handleNavigation = () => {
    navigate(`/pokemon/${pokemon.name}`);
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
        <Button size="small" onClick={handleNavigation}>
          Saber Mais
        </Button>

        {active ? <StarIcon /> : <StarBorderOutlinedIcon />}
      </Box>
    </CardComponent>
  );
}
