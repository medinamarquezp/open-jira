import { FC, useContext } from "react";
import { Grid, List, Paper, Typography } from "@mui/material";

import { EntryCard } from "./EntryCard";
import { NewEntryForm } from "./NewEntryForm";
import { AddEntryButton } from "./AddEntryButton";

import { EntriesContext } from "@/context/entries/EntriesContext";
import { Status } from "interfaces/EntriesInterfaces";

interface Props {
  status: Status;
  title: string;
}

export const EntriesList: FC<Props> = ({ status, title }) => {
  const { toggleAddEntry, toggleState, getEntriesByStatus } =
    useContext(EntriesContext);
  const display = !toggleState[status] ? "inline-flex" : "none";
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
          <NewEntryForm status={status} />
          <AddEntryButton
            display={display}
            onClick={() => toggleAddEntry(status)}
          />
          <List>
            {getEntriesByStatus(status).map(({ id, content, createdAt }) => (
              <EntryCard key={id} content={content} createdAt={createdAt} />
            ))}
          </List>
        </Paper>
      </div>
    </Grid>
  );
};
