import { Fab } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const DeleteEntryButton = () => {
  return (
    <Fab
      variant="extended"
      color="error"
      sx={{ position: "absolute", bottom: "50px", right: "50px" }}
    >
      <DeleteOutlineIcon sx={{ mr: 1 }} />
      Eliminar
    </Fab>
  );
};
