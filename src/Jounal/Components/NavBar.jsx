import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { StartLogout } from "../../store/auth/Thunks";

export const NavBar = ({ DrawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const LogoutFirebase = () => {
    dispatch(StartLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DrawerWidth}px)` },
        ml: { sm: `${DrawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" component={"div"} noWrap>
            Journel App
          </Typography>
          <IconButton color="inherit" onClick={LogoutFirebase}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
