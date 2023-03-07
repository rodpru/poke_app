import { Box } from "@mui/material";
import React from "react";

export default function CardList({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "rgba(255,255,255, 0.5)",
        width: { xs: "80%", sm: "60%" },
        minHeight: "300px",
        gap: "20px",
        justifyContent: "center",
        p: "60px 40px",
        borderRadius: "10px",
        position: "relative",
        mt: { xs: "100px", sm: "none" },
      }}
    >
      {children}
    </Box>
  );
}
