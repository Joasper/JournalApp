import { createSlice } from "@reduxjs/toolkit";

export const JournalSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "journal",
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  //funciones que modifican el estado
  reducers: {
    SavingNote: (state, action) => {
      state.isSaving = false;
    },
    AddNewNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = true;
    },
    SetActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    SetNote: (state, action) => {
      state.notes = action.payload;
      state.messageSaved = "";
    },
    SetSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
      //TODO : Error
    },
    UpdateNote: (state, action) => {
      (state.isSaving = false),
        (state.notes = state.notes.map((note) => {
          if (note.id === action.payload.id) return action.payload;
          return note;
        }));

      state.messageSaved = `${action.payload.title} ha sido actualizada correctamente`;
    },
    setPhotosActiveNote: (state, action) => {
      state.active.imagesURL = [...action.payload, ...state.active.imagesURL];

      state.isSaving = false;
    },
    DeleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    ClearStateLogut: (state) => {
      (state.messageSaved = ""), (state.active = null), (state.notes = []);
      state.isSaving = false;
    },
  },
});

export const {
  AddNewNote,
  setPhotosActiveNote,
  SetActiveNote,
  SetNote,
  SetSaving,
  UpdateNote,
  DeleteNoteById,
  SavingNote,
  ClearStateLogut,
} = JournalSlice.actions;
