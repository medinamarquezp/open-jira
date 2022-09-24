import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { Box, Button, CardActions } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { EntriesContext } from "context/entries/EntriesContext";

interface Props {
  id: string;
  content: string;
}

export const EntryActionsButtons: FC<Props> = ({ id, content }) => {
  const router = useRouter();
  const { updateEntry } = useContext(EntriesContext);

  const handleSave = () => {
    updateEntry(id, { content });
    router.push("/");
  };

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
        <Button onClick={() => router.push("/")} variant="text" color="info">
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="info"
          sx={{ marginLeft: "20px" }}
          startIcon={<SaveOutlinedIcon />}
          onClick={handleSave}
        >
          Guardar
        </Button>
      </Box>
    </CardActions>
  );
};
