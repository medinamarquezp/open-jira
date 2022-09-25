import { FC, MouseEventHandler } from "react";
import { Fab } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Props {
  handleDelete: MouseEventHandler;
}

export const DeleteEntryButton: FC<Props> = ({ handleDelete }) => {
  return (
    <Fab
      onClick={handleDelete}
      variant="extended"
      color="error"
      sx={{ position: "absolute", bottom: "50px", right: "50px" }}
    >
      <DeleteOutlineIcon sx={{ mr: 1 }} />
      Eliminar
    </Fab>
  );
};
