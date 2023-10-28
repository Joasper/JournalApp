import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./Config";

const googleProvider = new GoogleAuthProvider();
export const SignInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //console.log(credential);
    const { uid, displayName, email, photoURL } = result.user;
    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };

    console.log(user);
  } catch (error) {
    const ErrorCode = error.code;
    const ErrorMessage = error.message;

    return {
      ok: false,
      ErrorMessage,
      ErrorCode,
    };
  }
};

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log(res);
    const { uid, photoURL } = res.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };

    // const { uid, photoURL } = res.user;
    console.log(res);
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      ErrorMessage: error.message,
    };
  }
};

export const signEmailAndPassword = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = res.user;

    console.log({ uid, email, photoURL, displayName });

    console.log(res);
    return {
      ok: true,
      photoURL,
      email,
      uid,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const LogoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
