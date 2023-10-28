import {
  LogoutFirebase,
  SignInWithGoogle,
  registerUserWithEmailAndPassword,
  signEmailAndPassword,
} from "../../Firebase/Providers";
import { ClearStateLogut } from "../Journal/JournalSlice";
import { CheckingCredentials, Login, Logout } from "./AuthSlice";

export const CheckingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());
  };
};

export const GoogleSignIn = (email, password) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());
    const result = await SignInWithGoogle();
    if (!result.ok)
      return dispatch(Logout({ errorMessage: result.ErrorMessage }));
    console.log(result);
    dispatch(Login(result));
  };
};

export const startCreateUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());
    const { ok, uid, photoURL, ErrorMessage } =
      await registerUserWithEmailAndPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(Logout({ errorMessage: ErrorMessage }));

    return dispatch(Login({ uid, email, photoURL, displayName, ErrorMessage }));
    console.log(res);
  };
};

export const startLoginEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());
    const { uid, photoURL, displayName, errorMessage, ok } =
      await signEmailAndPassword({ email, password });

    console.log(uid, email);

    if (!ok) return dispatch(Logout({ errorMessage }));
    return dispatch(Login({ uid, photoURL, displayName, errorMessage, email }));
    console.log(res);
  };
};

export const StartLogout = () => {
  return async (dispatch) => {
    await LogoutFirebase();
    dispatch(ClearStateLogut());
    dispatch(Logout());
  };
};
