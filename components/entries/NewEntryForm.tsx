import { FC, useState, useContext, ChangeEvent } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { EntriesContext } from "@/context/entries/EntriesContext";
import { Status } from "interfaces/EntriesInterfaces";

interface Props {
  slug: Status;
}

export const NewEntryForm: FC<Props> = ({ slug }) => {
  const { toggleState, toggleAddEntry, addEntry } = useContext(EntriesContext);
  const [content, setContent] = useState("");
  const display = toggleState[slug] ? "inline" : "none";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const addNewEntry = () => {
    addEntry(content, slug);
    setContent("");
    toggleAddEntry(slug);
  };

  return (
    <Box display={display}>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        multiline
        fullWidth
        margin="normal"
        value={content}
        onChange={handleChange}
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
          onClick={addNewEntry}
          startIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
