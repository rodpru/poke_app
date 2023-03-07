import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: 400 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopUp({ showModal, setShowModal }) {
  const [favourites, setFavourites] = useState(null);
  useEffect(() => {
    let favsArray = JSON.parse(localStorage.getItem("favourites"));
    if (favsArray) {
      let newArr = favsArray;
      setFavourites(favsArray);
    }
  }, []);
  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>My List:</Typography>
        {favourites ? (
          favourites.map((favourite, index) => {
            return (
              <Link key={index} href={`/pokemon/${favourite}`}>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {favourite}
                </Typography>
              </Link>
            );
          })
        ) : (
          <Typography>No favourite to show</Typography>
        )}
      </Box>
    </Modal>
  );
}
