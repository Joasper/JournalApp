import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { GetNoteById } from "../Helpers/GetNoteById";
import { SetActiveNote } from "../../store/Journal/JournalSlice";
import { LeftItemLayout } from "./LeftItemLayout";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { DiplayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {DiplayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note) => {
            return <LeftItemLayout key={note.id} {...note} />;
          })}
        </List>
      </Drawer>
    </Box>
  );
};
