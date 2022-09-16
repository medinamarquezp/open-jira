import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const AddEntryButton = () => {
  return (
    <Button
      variant="outlined"
      fullWidth={true}
      startIcon={<AddCircleOutlineIcon />}
      color="info"
      sx={{ marginTop: "0.5rem" }}
    >
      Nueva tarjeta
    </Button>
  );
};
