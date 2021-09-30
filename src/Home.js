import { Box } from "@mui/material";
import React from "react";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.dark,
      }}
    >
      <NavBar />
      <SideMenu />
    </Box>
  );
}

export default Home;
