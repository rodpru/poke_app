import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PopUp from "../PopUp";

export default function Layout({ children, full }) {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Box>
      <Link
        to="/"
        style={{
          color: "white",
          position: "absolute",
          top: "20px",
          left: "10%",
          cursor: "pointer",
        }}
      >
        <HomeIcon sx={{ fontSize: "3rem" }} />
      </Link>
      <Typography
        sx={{
          color: "white",
          fontSize: "30px",
          position: "absolute",
          top: "20px",
          left: { xs: "50%", sm: "70%" },
          cursor: "pointer",
        }}
        onClick={handleModal}
      >
        My Favourites
      </Typography>

      {children}
      {showModal && <PopUp showModal={showModal} setShowModal={setShowModal} />}
    </Box>
  );
}
