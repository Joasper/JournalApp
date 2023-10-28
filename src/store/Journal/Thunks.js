import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/Config";
import {
  AddNewNote,
  SetActiveNote,
  SavingNote,
  SetNote,
  SetSaving,
  UpdateNote,
  setPhotosActiveNote,
  DeleteNoteById,
} from "./JournalSlice";
import { loadNotes } from "../../Jounal/Helpers/LoadNotes";
import { FileUpload } from "../../Jounal/Helpers/FIleUpload";

export const StartNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const NewNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/Notas`));
    const res = await setDoc(newDoc, NewNote);
    NewNote.id = newDoc.id;

    dispatch(AddNewNote(NewNote));
    dispatch(SetActiveNote(NewNote));
    dispatch(SavingNote());
  };
};

export const startLoudingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { notes } = getState().journal;

    const Notes = await loadNotes(uid);
    dispatch(SetNote(Notes));
  };
};

export const StartSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(SetSaving());
    const { uid } = getState().auth;
    const { active } = getState().journal;

    const noteAFireStore = { ...active };
    delete noteAFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/Notas/${active.id}`);
    await setDoc(docRef, noteAFireStore, { merge: true });

    dispatch(UpdateNote(active));
  };
};

export const startUplodingImg = (files = []) => {
  return async (dispatch) => {
    dispatch(SetSaving());

    const ArrayOfFiles = [];
    for (const file of files) {
      ArrayOfFiles.push(FileUpload(file));
    }

    const photosURL = await Promise.all(ArrayOfFiles);
    dispatch(setPhotosActiveNote(photosURL));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/Notas/${active.id}`);
    await deleteDoc(docRef);
    dispatch(DeleteNoteById(active.id));
  };
};
