import { Box, Button, CardActions } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const EntryActionsButtons = () => {
  return (
    <CardActions
      disableSpacing
      sx={{
        display: "flex",
        justifyContent: "end",
        margin: "0px 10px 20px 10px",
      }}
    >
      <Box>
        <Button variant="text" color="info">
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="info"
          sx={{ marginLeft: "20px" }}
          startIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </CardActions>
  );
};
