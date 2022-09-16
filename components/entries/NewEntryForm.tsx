import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const NewEntryForm = () => {
  return (
    <>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        multiline
        fullWidth
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" margin="5px 0">
        <Button variant="text" color="error">
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="info"
          startIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </>
  );
};
