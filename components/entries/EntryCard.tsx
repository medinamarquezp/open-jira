import { DragEvent, FC, useContext } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { UIContext } from "@/context/ui/UIContext";

interface Props {
  id: string;
  content: string;
  createdAt: number;
}

export const EntryCard: FC<Props> = ({ id, content, createdAt }) => {
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
      sx={{ padding: "0.5rem", margin: "10px 0", backgroundColor: "black" }}
    >
      <CardContent>
        <Typography fontSize="1rem">{content}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Typography fontSize="0.8rem" color="darkgrey">
          Hace 2 días
        </Typography>
      </CardActions>
    </Card>
  );
};
