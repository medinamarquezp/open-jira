import { Card, CardActions, CardContent, Typography } from "@mui/material";

export const EntryCard = () => {
  return (
    <Card sx={{ padding: "0.5rem", backgroundColor: "black" }}>
      <CardContent>
        <Typography fontSize="1.2rem">Test</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Typography fontSize="0.8rem">Hace 2 diías</Typography>
      </CardActions>
    </Card>
  );
};
