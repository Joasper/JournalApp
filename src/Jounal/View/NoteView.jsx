import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, TextField, Typography, IconButton } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import { ImageGallery } from "../Components/ImageGalley";
import { useForm } from "../../Hooks/UseForm";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveNote } from "../../store/Journal/JournalSlice";
import {
  StartSaveNote,
  startDeleteNote,
  startUplodingImg,
} from "../../store/Journal/Thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active, messageSaved } = useSelector((state) => state.journal);
  const { body, title, formState, onInputChange, date, imageURL } =
    useForm(active);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(SetActiveNote(formState));
  }, [formState]);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const fileInputRef = useRef();

  const SaveNote = () => {
    dispatch(StartSaveNote());
  };
  const onFileInputChange = ({ target }) => {
    dispatch(startUplodingImg(target.files));
  };

  const onDeleteNote = () => {
    dispatch(startDeleteNote());
  };

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 2 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button onClick={SaveNote}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          placeholder="Ingresa una lista"
          label="Titulo"
          variant="filled"
          fullWidth
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          placeholder="¿Que sucedio hoy?"
          multiline
          variant="filled"
          fullWidth
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent={"end"}>
        <Button onClick={onDeleteNote} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borras
        </Button>
      </Grid>
      <ImageGallery images={active.imagesURL} />
    </Grid>
  );
};
