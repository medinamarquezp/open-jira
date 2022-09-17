import { FC } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
  content: string;
  createdAt: number;
}

export const EntryCard: FC<Props> = ({ content, createdAt }) => {
  return (
    <Card
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
