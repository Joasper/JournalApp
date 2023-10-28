export const GetNoteById = (idNote, note) => {
  let NoteActive = note.find((note) => note.id === idNote);
  console.log(NoteActive);
  NoteActive = { ...NoteActive, imagesURL: [...note.imagesURL] };

  return NoteActive;
};
