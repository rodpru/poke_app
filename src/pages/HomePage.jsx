import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import BgImg from "../assets/images/wallpaper.jpg";
import CardList from "../components/CardList";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const limitedList = pokemonsList.slice(firstCardIndex, lastCardIndex);

  //Get Pokemons from API
  const getAllPokemons = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let promisesArray = results.map(async (result) => {
          const response = await fetch(result.url);
          return await response.json();
        });
        return Promise.all(promisesArray);
      })
      .then((data) => {
        //Set the state with pokemon full details
        setPokemonsList(data);
      });
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImg})`,
        minHeight: "100vh",
        p: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "start" },
      }}
    >
      {limitedList.length < 1 ? (
        <CardList>
          <Typography variant="h2">Loading...</Typography>
        </CardList>
      ) : (
        <CardList>
          {limitedList.map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} />;
          })}
          <Pagination
            totalCards={pokemonsList.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </CardList>
      )}
    </Box>
  );
}
