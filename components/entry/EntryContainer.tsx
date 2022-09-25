import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { Card, Grid } from "@mui/material";
import { EntriesContainer } from "../entries/EntriesContainer";
import { DeleteEntryButton } from "./DeleteEntryButton";

interface Props extends PropsWithChildren {
  handleDelete: MouseEventHandler;
}
export const EntryContainer: FC<Props> = ({ children, handleDelete }) => {
  return (
    <EntriesContainer centered={true}>
      <Grid item xs={8} marginTop="20px">
        <Card variant="outlined">{children}</Card>
      </Grid>
      <DeleteEntryButton handleDelete={handleDelete} />
    </EntriesContainer>
  );
};
