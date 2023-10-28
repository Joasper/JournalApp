import React from "react";
import { IconButton, Typography } from "@mui/material";
import { AddOutlined, EmailOutlined, Shop } from "@mui/icons-material";
import { JournelLayout } from "../Layout/JournelLayout";
import { NothingSelectedView } from "../View/NothingSelectedView";
import { NoteView } from "../View/NoteView";
import { useDispatch, useSelector } from "react-redux";
import { StartNewNote } from "../../store/Journal/Thunks";

//<NoteView />
export const JournalPage = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.journal);
  const { isSaving } = useSelector((state) => state.journal);

  const NewNote = () => {
    dispatch(StartNewNote());
  };

  return (
    <JournelLayout>
      {active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={NewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",

          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
          backgroundColor: "white",
          color: "black",
        }}
      >
        {" "}
        <AddOutlined fontSize="50" />{" "}
      </IconButton>
    </JournelLayout>
  );
};
