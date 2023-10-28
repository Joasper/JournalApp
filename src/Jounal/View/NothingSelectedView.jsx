import { Grid, Typography } from "@mui/material";
import { StarOutline, StartOutlined } from "@mui/icons-material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      {" "}
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"h5"} color={"white"}>
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
