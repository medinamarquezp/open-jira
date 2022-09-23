import type { NextPage } from "next";
import { CardContent, CardHeader, TextField } from "@mui/material";

import { MainLayout } from "@/components/layouts/MainLayout";
import { EntryContainer } from "@/components/entry/EntryContainer";
import { EntryActionsButtons } from "@/components/entry/EntryActionsButtons";

const Entry: NextPage = () => {
  return (
    <MainLayout>
      <EntryContainer>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent sx={{ marginTop: "-20px" }}>
          <TextField
            label="Entrada"
            variant="outlined"
            multiline
            autoFocus
            fullWidth
            margin="normal"
          />
        </CardContent>
        <EntryActionsButtons />
      </EntryContainer>
    </MainLayout>
  );
};

export default Entry;
