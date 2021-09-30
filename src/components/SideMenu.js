import React from "react";
import Explore from "@mui/icons-material/ExploreOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import Subscriptions from "@mui/icons-material/SubscriptionsOutlined";
import YouTube from "@mui/icons-material/YouTube";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

const listItemIconStyle = {
  [`& .MuiListItemText-primary`]: {
    fontSize: 14,
  },
}

function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem button sx={{ pt: 1 }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={listItemIconStyle} primary={"Início"} />
          </ListItem>
          <ListItem button sx={{ pt: 1 }}>
            <ListItemIcon>{<Explore />}</ListItemIcon>
            <ListItemText sx={listItemIconStyle} primary={"Explorar"} />
          </ListItem>
          <ListItem button sx={{ pt: 1 }}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText sx={listItemIconStyle} primary={"Inscrições"} />
          </ListItem>
          <ListItem button sx={{ pt: 1 }}>
            <ListItemIcon>{<YouTube />}</ListItemIcon>
            <ListItemText sx={listItemIconStyle} primary={"Originals"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default SideMenu;
