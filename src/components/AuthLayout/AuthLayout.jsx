import { Box, Grid } from "@mui/material"

function AuthLayout (props){
    return(
        
        <>    <Box sx={{ flexGrow: 1 }}>
{props.children}
      </Box>
  </>
    )
}
export default AuthLayout;