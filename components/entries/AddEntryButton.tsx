import { FC, MouseEventHandler } from "react";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface Props {
  onClick?: MouseEventHandler;
  display: "inline-flex" | "none";
}

export const AddEntryButton: FC<Props> = ({ onClick, display }) => {
  return (
    <Button
      variant="outlined"
      fullWidth={true}
      startIcon={<AddCircleOutlineIcon />}
      color="info"
      onClick={onClick}
      sx={{ marginTop: "0.5rem", display }}
    >
      Nueva tarjeta
    </Button>
  );
};
