import { Grid, List, Paper, Typography } from "@mui/material";
import { EntryCard } from "./EntryCard";

export const EntriesList = () => {
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
          <Typography variant="h6">TODO</Typography>
          <List>
            <EntryCard />
          </List>
        </Paper>
      </div>
    </Grid>
  );
};
