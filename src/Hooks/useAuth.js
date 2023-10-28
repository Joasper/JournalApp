import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../Firebase/Config";
import { Login, Logout } from "../store/auth/AuthSlice";
import { startLoudingNote } from "../store/Journal/Thunks";

export const useAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(Logout());

      const { uid, email, photoURL, displayName } = user;
      dispatch(Login({ email, photoURL, displayName, uid }));
      dispatch(startLoudingNote());
    });
  }, []);

  return {
    status,
  };
};
