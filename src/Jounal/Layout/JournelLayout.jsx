import React from "react";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { NavBar } from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";

const DrawerWidth = 240;

export const JournelLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar DrawerWidth={DrawerWidth} />
      <SideBar DrawerWidth={DrawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
