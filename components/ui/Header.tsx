import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="Menu">
          <Menu />
        </IconButton>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ flexGrow: 1, marginLeft: "0.2rem" }}
        >
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
