import { FC, useState, useContext, ChangeEvent } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import { EntriesContext } from "@/context/entries/EntriesContext";
import { Status } from "interfaces/EntriesInterfaces";

interface Props {
  status: Status;
}

export const NewEntryForm: FC<Props> = ({ status }) => {
  const { toggleState, toggleAddEntry, addEntry } = useContext(EntriesContext);
  const [content, setContent] = useState("");
  const [hasError, setHasError] = useState(false);
  const display = toggleState[status] ? "inline" : "none";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    hasError && setHasError(false);
    setContent(event.target.value);
  };

  const addNewEntry = () => {
    if (content.length === 0) {
      setHasError(true);
    } else {
      addEntry(content, status);
      setContent("");
      toggleAddEntry(status);
    }
  };

  return (
    <Box display={display}>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        multiline
        autoFocus
        fullWidth
        error={hasError}
        helperText={hasError && "Debes escribir algo"}
        margin="normal"
        value={content}
        onChange={handleChange}
      />
      <Box display="flex" justifyContent="space-between" margin="5px 0">
        <Button
          variant="text"
          color="error"
          onClick={() => toggleAddEntry(status)}
        >
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="info"
          onClick={addNewEntry}
          startIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
