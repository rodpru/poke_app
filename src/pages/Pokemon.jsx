import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CardMedia, Typography } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import BgImg from "../assets/images/wallpaper1.jpg";
import {
  removeFromFavourites,
  setFavourites,
} from "../store/slices/favouritesSlice";
import Layout from "../components/common/Layout";

export default function Pokemon() {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.value);
  const [pokemon, setPokemon] = useState(null);
  const [active, setActive] = useState(false);

  //gets individual pokemon from API
  useEffect(() => {
    let urlParam = window.location.href.split("/").pop();
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${urlParam}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Check if favourites exits
  useEffect(() => {
    let itemsFromLS = JSON.parse(localStorage.getItem("favourites"));
    let urlParam = window.location.href.split("/").pop();
    if (itemsFromLS) {
      itemsFromLS.map((item) => {
        if (item === urlParam) setActive(true);
      });
    } else {
      setActive(false);
    }
  }, [active, pokemon]);

  //dispatches reddux actions to set favourites on LocalStorage and Reddux
  const handleFavourites = (pokemon) => {
    let stateToChange = [...favourites];
    let removedDuplicates = [...new Set(stateToChange)];
    let itemsFromLS = JSON.parse(localStorage.getItem("favourites"));
    //When there are no items on LocalStorage
    if (!itemsFromLS || itemsFromLS.length < 1) {
      let arrToSend = [...removedDuplicates, pokemon];
      console.log(arrToSend, "!items arrTosend");
      localStorage.removeItem("favourites");
      dispatch(setFavourites(arrToSend));
      localStorage.setItem("favourites", JSON.stringify(arrToSend));
      setActive(!active);
      return;
    } else {
      //When there are items on LocalStorage

      let localStorageArr = [...new Set(itemsFromLS)];
      localStorageArr.map((item) => {
        if (item === pokemon) {
          let index = localStorageArr.indexOf(pokemon);
          console.log(index, "indexof");
          localStorageArr.splice(index, 1);
          console.log(localStorageArr, "localStorageArr");
          localStorage.removeItem("favourites");
          localStorage.setItem("favourites", JSON.stringify(localStorageArr));
          dispatch(removeFromFavourites(localStorageArr));
          setActive(!active);
          return;
        } else {
          localStorage.removeItem("favourites");
          let arrToSend = [...removedDuplicates, pokemon];
          dispatch(setFavourites(arrToSend));
          localStorage.setItem("favourites", JSON.stringify(arrToSend));
          setActive(!active);
          return;
        }
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        p: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "start" },
      }}
    >
      <Layout full={true}>
        {pokemon && (
          <Box sx={{ maxWidth: { xs: "100%" } }}>
            <Typography
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: { xs: "2rem", md: "6rem" },
              }}
              variant="h1"
            >
              {pokemon.name}
            </Typography>
            <CardMedia
              component="img"
              src={pokemon.sprites.other.dream_world.front_default}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ color: "white" }}>
                <Typography>Main:</Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>Height:{pokemon.height}</li>
                  <li>Weight:{pokemon.weight}</li>
                  <li>Specie: {pokemon.species.name}</li>
                </ul>
              </Box>
              <Box sx={{ color: "white" }}>
                <Typography>Habilities:</Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {pokemon.abilities.map((ability) => {
                    return (
                      <li key={ability.ability.name} style={{ color: "white" }}>
                        {ability.ability.name}
                      </li>
                    );
                  })}
                </ul>
              </Box>
              <Box sx={{ color: "white" }}>
                <Typography>Forms:</Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {pokemon.forms.map((form) => {
                    return (
                      <li key={form.name} style={{ color: "white" }}>
                        {form.name}
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box>
              {active ? (
                <StarIcon
                  sx={{ fontSize: "5rem", color: "yellow" }}
                  onClick={() => handleFavourites(pokemon.name)}
                />
              ) : (
                <StarBorderOutlinedIcon
                  sx={{ fontSize: "5rem", color: "yellow" }}
                  onClick={() => handleFavourites(pokemon.name)}
                />
              )}
            </Box>
          </Box>
        )}
      </Layout>
    </Box>
  );
}
