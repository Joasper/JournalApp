import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/Config";

export const loadNotes = async (id) => {
  const collectionRef = collection(FirebaseDB, `${id}/journal/Notas`);
  const docs = await getDocs(collectionRef);
  const Notes = [];
  docs.forEach((doc) => {
    Notes.push({ id: doc.id, ...doc.data() });
  });

  return Notes;
};
