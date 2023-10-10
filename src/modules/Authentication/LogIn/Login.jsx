import { Box, Button, Container, InputAdornment, Link, TextField } from "@mui/material";
import { Mail } from "react-feather";
import { Lock } from "react-feather";
import "./Login.scss";
import {AuthButton} from "../../../components/styledComponents/CustomButton"
import { useNavigate } from "react-router-dom";
import { path } from "../../Routes/Routes";
function Login() {
  const navigate=useNavigate();
  return (
    <>
      <Container maxWidth={false} sx={{ bgcolor: "#F4F5FA", height: "100vh" }}>
        <Box className="login-wapper">
          <Box className="login-container">
            <p className="welcome-text">Welcome back!</p>
            <p className="sub-heading">Login to your account</p>
            <Box className="field-container">
              <TextField
                fullWidth
                id="outlined"
                placeholder="Email Address"
                sx={{ backgroundColor: "rgba(239, 241, 249, 0.6)" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail color="#6E7079" size="22px" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                id="outlined-password-input"
                placeholder="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
                sx={{ backgroundColor: "rgba(239, 241, 249, 0.6)" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="#6E7079" size="22px" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Link className="forgot-password" href="#" underline="none">
              {"Forgot Password?"}
            </Link>
            <p className="create-account">
              Don’t have an account? <span  onClick={()=>navigate(path.sign_up)}>Sign Up</span>{" "}
            </p>
            <AuthButton size="medium" fullWidth>
              Login
            </AuthButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Login;
