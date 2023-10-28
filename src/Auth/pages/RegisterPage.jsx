import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../Hooks/UseForm";
import { useMemo, useState } from "react";
import { startCreateUserWithEmailPassword } from "../../store/auth/Thunks";

const FormData = {
  email: "",
  password: "",
  displayName: "",
};
const FormValidator = {
  email: [(value) => value.includes("@"), "El correo debe contener un @"],
  password: [
    (value) => value.length >= 6,
    "La contrseña debe contener mas de 6 caracters",
  ],
  displayName: [
    (value) => value.length >= 1,
    "El usuario debe contener mas de 1 caracter",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [FormValidationSubmit, setFormValidationSubmit] = useState(false);
  const {
    email,
    password,
    onInputChange,
    formState,
    displayName,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(FormData, FormValidator);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingUser = useMemo(() => status === "Checking", [status]);

  const onSumitForm = (e) => {
    e.preventDefault();
    setFormValidationSubmit(true);
    dispatch(startCreateUserWithEmailPassword(formState));
    if (!isFormValid) return;
  };

  return (
    <AuthLayout title="Register">
      <form action="" onSubmit={onSumitForm}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && FormValidationSubmit}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Ingresa tu correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && FormValidationSubmit}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && FormValidationSubmit}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item sm={12} xs={12}>
              {errorMessage ===
              "Firebase: Error (auth/email-already-in-use)." ? (
                <Alert severity="error">Usuario ya existe</Alert>
              ) : null}
            </Grid>
            <Grid item sm={12} xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="sumit"
                disabled={isCheckingUser}
              >
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"}>
            <Link component={RouterLink} color={"inherit"} to="/auth/login">
              Iniciar Sesion{" "}
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
