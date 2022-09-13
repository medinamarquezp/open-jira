import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UIContext } from "../../context/ui/UIContext";

const NavOptions = [
  { label: "Tasks", icon: <AssignmentIcon /> },
  { label: "Profile", icon: <AccountCircleIcon /> },
];

export const Sidebar = () => {
  const { toggleSidebar, isSidebarOpened } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={isSidebarOpened} onClose={toggleSidebar}>
      <Box sx={{ width: 260 }}>
        <Typography variant="h5" sx={{ margin: "30px 10px 10px" }}>
          Menu
        </Typography>
        <Divider />
        <nav aria-label="sidebar main navigation">
          <List>
            {NavOptions.map(({ label, icon }) => (
              <ListItem disablePadding key={label}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
      </Box>
    </Drawer>
  );
};
