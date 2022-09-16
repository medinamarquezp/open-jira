import { FC } from "react";
import { Button, Grid, List, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { EntryCard } from "./EntryCard";
import { NewEntryForm } from "./NewEntryForm";

interface Props {
  slug: string;
  title: string;
}

export const EntriesList: FC<Props> = ({ slug, title }) => {
  return (
    <Grid item xs={4}>
      <div>
        <Paper
          sx={{
            height: "calc(100vh - 100px)",
            overflowX: "auto",
            padding: "1rem",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <NewEntryForm />
          <Button
            variant="outlined"
            fullWidth={true}
            startIcon={<AddCircleOutlineIcon />}
            color="info"
            sx={{ marginTop: "0.5rem" }}
          >
            Agregar nueva tarjeta
          </Button>
          <List>
            <EntryCard title="Hacer la compra" createdAt={Date.now()} />
          </List>
        </Paper>
      </div>
    </Grid>
  );
};
