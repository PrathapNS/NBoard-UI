import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Paper, TextField, colors } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Row } from "react-bootstrap";

function LoginPage() {
  const navigate = useNavigate();

  // inputs
  const [CDSIDInput, setCDSIDInput] = useState();
  const [PasswordInput, setPasswordInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
    console.log(CDSIDInput);
    console.log(PasswordInput);

    // if (!FormControl.CDSIDInput && !FormControl.CDSIDInput.length) {
    //   setCDSIDError("CDSID is required");
    //   return false;
    // } else {
    //   setCDSIDError("");
    // }
    // if (!FormControl.PasswordInput && !FormControl.PasswordInput.length) {
    //   setPasswordError("Password is required");
    //   return false;
    // } else {
    //   setPasswordError("");
    // }
  };

  const [CDSIDError, setCDSIDError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  // password field
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  return (
    <div className="LoginPage">
      <Paper elevation={12} className="LoginPage-Paper">
        <h1 style={{ color: "#1a237e" }}> Ford Announce Net</h1>
        <br></br>
        <br></br>
        <div>
          <p>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                label="Email"
                // error={CDSIDError && CDSIDError.length ? true : false}
                // helperText={CDSIDError}
                value={CDSIDInput}
                onChange={(event) => setCDSIDInput(event.target.value)}
              />
            </FormControl>
          </p>
          <p>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                // error={PasswordError && PasswordError.length ? true : false}
                // helperText={PasswordError}
                value={PasswordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <div style={{ paddingLeft: "135px", fontSize: "17px" }}>
              <Link href="/P1ForgotPassword">Forgot Password</Link>
            </div>
          </p>
          <br></br>
          <p>
            <Stack spacing={2} direction="row" justifyContent={"center"}>
              <Button
                onClick={handleSubmit}
                style={{ width: "200px", fontSize: "18px" }}
                variant="contained"
              >
                Login
              </Button>
            </Stack>
          </p>
        </div>
      </Paper>
    </div>
  );
}

export default LoginPage;
