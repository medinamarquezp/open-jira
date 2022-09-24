import { FC, MouseEventHandler } from "react";
import { useRouter } from "next/router";
import { Box, Button, CardActions } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

interface Props {
  handleSave: MouseEventHandler;
}

export const EntryActionsButtons: FC<Props> = ({ handleSave }) => {
  const router = useRouter();
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
