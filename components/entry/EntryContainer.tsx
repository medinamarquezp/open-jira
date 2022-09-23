import { Card, Grid } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { EntriesContainer } from "../entries/EntriesContainer";
import { DeleteEntryButton } from "./DeleteEntryButton";

interface Props extends PropsWithChildren {}
export const EntryContainer: FC<Props> = ({ children }) => {
  return (
    <EntriesContainer centered={true}>
      <Grid item xs={8} marginTop="20px">
        <Card variant="outlined">{children}</Card>
      </Grid>
      <DeleteEntryButton />
    </EntriesContainer>
  );
};
