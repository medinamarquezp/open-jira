import { FC, useContext } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { EntriesContext } from "@/context/entries/EntriesContext";

interface Props {
  slug: string;
}

export const NewEntryForm: FC<Props> = ({ slug }) => {
  const { toggleState, toggleAddEntry } = useContext(EntriesContext);
  const display = toggleState[slug] ? "inline" : "none";
  return (
    <Box display={display}>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        multiline
        fullWidth
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" margin="5px 0">
        <Button
          variant="text"
          color="error"
          onClick={() => toggleAddEntry(slug)}
        >
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
    </Box>
  );
};
