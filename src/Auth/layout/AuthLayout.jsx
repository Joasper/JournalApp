import React from "react";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
        className="box-shadow"
      >
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
