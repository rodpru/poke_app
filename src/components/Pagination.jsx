import { Button, Box } from "@mui/material";
import React from "react";

export default function Pagination({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 0; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }
  pages.shift();

  return (
    <Box sx={{ position: "absolute", top: "100%" }}>
      {pages.map((page) => {
        return (
          <Button
            sx={{
              backgroundColor: currentPage === page ? "white" : "transparent",
            }}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        );
      })}
    </Box>
  );
}
