import { FC } from "react";
import { Grid, List, Paper, Typography } from "@mui/material";
import { EntryCard } from "./EntryCard";

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
          <List>
            <EntryCard title="Hacer la compra" createdAt={Date.now()} />
          </List>
        </Paper>
      </div>
    </Grid>
  );
};
