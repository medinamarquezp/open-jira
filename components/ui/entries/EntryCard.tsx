import { FC } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  createdAt: number;
}

export const EntryCard: FC<Props> = ({ title, createdAt }) => {
  return (
    <Card sx={{ padding: "0.5rem", backgroundColor: "black" }}>
      <CardContent>
        <Typography fontSize="1.2rem">{title}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Typography fontSize="0.8rem">Hace 2 diías</Typography>
      </CardActions>
    </Card>
  );
};
