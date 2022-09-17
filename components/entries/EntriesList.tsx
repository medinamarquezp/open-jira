import { FC, useContext } from "react";
import { Grid, List, Paper, Typography } from "@mui/material";

import { EntryCard } from "./EntryCard";
import { NewEntryForm } from "./NewEntryForm";
import { AddEntryButton } from "./AddEntryButton";

import { EntriesContext } from "@/context/entries/EntriesContext";

interface Props {
  slug: string;
  title: string;
}

export const EntriesList: FC<Props> = ({ slug, title }) => {
  const { toggleAddEntry, toggleState } = useContext(EntriesContext);
  const display = !toggleState[slug] ? "inline-flex" : "none";
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div>
        <Paper
          sx={{
            height: "calc(100vh - 100px)",
            overflowX: "auto",
            padding: "1rem",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <NewEntryForm slug={slug} />
          <AddEntryButton
            display={display}
            onClick={() => toggleAddEntry(slug)}
          />
          <List>
            <EntryCard title="Hacer la compra" createdAt={Date.now()} />
          </List>
        </Paper>
      </div>
    </Grid>
  );
};
