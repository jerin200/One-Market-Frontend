import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout(props) {
  return <Box sx={{ flexGrow: 1 }}><Outlet/></Box>;
}
export default AuthLayout;
