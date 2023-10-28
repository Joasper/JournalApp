import React from "react";
import { SetActiveNote } from "../../store/Journal/JournalSlice";
import { useDispatch } from "react-redux";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const LeftItemLayout = ({
  title = "",
  body,
  id,
  date,
  imagesURL = [],
}) => {
  const dispatch = useDispatch();
  const setActiveNote = () => {
    dispatch(SetActiveNote({ id, body, title, imagesURL, date }));
  };
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={() => setActiveNote()}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
