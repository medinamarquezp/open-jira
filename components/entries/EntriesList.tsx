import { DragEvent, FC, useContext, useMemo } from "react";
import { Grid, Paper, Typography } from "@mui/material";

import { EntryCard } from "./EntryCard";
import { NewEntryForm } from "./NewEntryForm";
import { AddEntryButton } from "./AddEntryButton";

import { UIContext } from "@/context/ui/UIContext";
import { EntriesContext } from "@/context/entries/EntriesContext";
import { Status } from "interfaces/EntriesInterfaces";

interface Props {
  status: Status;
  title: string;
}

export const EntriesList: FC<Props> = ({ status, title }) => {
  const { isDragging, toggleDragging } = useContext(UIContext);
  const { entries, toggleAddEntry, toggleState, updateEntry } =
    useContext(EntriesContext);
  const display = !toggleState[status] ? "inline-flex" : "none";
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("entryId");
    updateEntry(id, { status });
    isDragging && toggleDragging();
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div onDragOver={(event) => event.preventDefault()} onDrop={dropHandler}>
        <Paper
          sx={[
            {
              height: "calc(100vh - 100px)",
              overflowX: "auto",
              padding: "1rem",
            },
            isDragging && {
              opacity: "0.2",
              border: "1px dashed #CCC",
            },
          ]}
        >
          <Typography variant="h6">{title}</Typography>
          <NewEntryForm status={status} />
          <AddEntryButton
            display={display}
            onClick={() => toggleAddEntry(status)}
          />
          {entriesByStatus.map(({ _id, content, createdAt }) => (
            <EntryCard
              key={_id}
              id={_id}
              content={content}
              createdAt={createdAt}
            />
          ))}
        </Paper>
      </div>
    </Grid>
  );
};
