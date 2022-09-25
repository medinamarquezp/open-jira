import { DragEvent, FC, useContext } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { UIContext } from "@/context/ui/UIContext";
import { distanteToNow } from "services/dates.service";

interface Props {
  id: string;
  content: string;
  createdAt: number;
}

export const EntryCard: FC<Props> = ({ id, content, createdAt }) => {
  const router = useRouter();
  const isDarkTheme = useTheme().palette.mode === "dark";

  const { toggleDragging, isDragging } = useContext(UIContext);

  const handleDragging = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("entryId", id);
    !isDragging && toggleDragging();
  };

  const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    isDragging && toggleDragging();
  };

  return (
    <Card
      draggable
      onDragStart={handleDragging}
      onDragEnd={handleDragEnd}
      onClick={() => router.push(`/entries/${id}`)}
      sx={{
        padding: "0.5rem",
        margin: "10px 0",
        backgroundColor: isDarkTheme ? "grey.900" : "grey.100",
        whiteSpace: "pre-line",
        transition: "0.3s",
        boxShadow: 0,
        ":hover": {
          cursor: "pointer",
          backgroundColor: isDarkTheme ? "grey.800" : "grey.300",
        },
      }}
    >
      <CardContent>
        <Typography fontSize="1rem">{content}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Typography fontSize="0.8rem" color="darkgrey">
          {distanteToNow(createdAt)}
        </Typography>
      </CardActions>
    </Card>
  );
};
