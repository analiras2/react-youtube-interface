import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Apps from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVert from "@mui/icons-material/MoreVert";
import VideoCall from "@mui/icons-material/VideoCall";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

function NavBar() {
  return (
    <AppBar
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
    >
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 0, mr: 4 }}
        >
          <MenuIcon />
        </IconButton>
        <img src="images/logo-preto.png" alt="logo" style={{ height: 30 }} />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" sx={{ pr: 2 }}>
          <VideoCall />
        </IconButton>
        <IconButton color="inherit" sx={{ pr: 2 }}>
          <Apps />
        </IconButton>
        <IconButton color="inherit" sx={{ pr: 2 }}>
          <MoreVert />
        </IconButton>
        <Button
          color="secondary"
          variant="outlined"
          startIcon={<AccountCircle />}
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
