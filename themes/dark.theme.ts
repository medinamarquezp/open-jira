import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#482880",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#482880",
        },
      },
    },
  },
});
