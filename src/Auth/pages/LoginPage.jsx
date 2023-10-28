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
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../Hooks/UseForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  CheckingAuth,
  GoogleSignIn,
  startLoginEmailPassword,
} from "../../store/auth/Thunks";
import { useMemo } from "react";

const formdata = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange, formState } = useForm(formdata);

  const isBtnDisable = useMemo(() => status === "Checking", [status]);

  const dispatch = useDispatch();

  const onSumit = (e) => {
    e.preventDefault();
    dispatch(CheckingAuth());
    console.log(formState);
  };

  const StartGoogleSignIn = (e) => {
    dispatch(GoogleSignIn());
  };

  const StartLoginEmailPassword = (e) => {
    dispatch(startLoginEmailPassword(formState));
  };

  return (
    <AuthLayout title="Login">
      <form action="" onSubmit={onSumit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Ingresa tu correo"
              fullWidth
              onChange={onInputChange}
              name="email"
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              onChange={onInputChange}
              name="password"
              value={password}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item sm={12} xs={12}>
              {errorMessage ===
              "Firebase: Error (auth/invalid-login-credentials)." ? (
                <Alert severity="error">Usuario o contraseña no validos</Alert>
              ) : null}
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                onClick={() => StartLoginEmailPassword()}
                variant="contained"
                fullWidth
                type="sumit"
                disabled={isBtnDisable}
              >
                Login
              </Button>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={StartGoogleSignIn}
                disabled={isBtnDisable}
              >
                <Google />
                Google
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"}>
            <Link component={RouterLink} color={"inherit"} to="/auth/register">
              Crear Usuario{" "}
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
