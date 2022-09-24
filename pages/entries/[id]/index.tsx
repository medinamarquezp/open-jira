import { ChangeEvent, useState } from "react";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import { CardContent, CardHeader, TextField } from "@mui/material";

import { distanteToNow } from "services/dates.service";
import { MainLayout } from "@/components/layouts/MainLayout";
import { EntryInterface } from "interfaces/EntriesInterfaces";
import { getEntryById } from "repositories/entries.repository";
import { EntryContainer } from "@/components/entry/EntryContainer";
import { EntryActionsButtons } from "@/components/entry/EntryActionsButtons";

interface Props {
  entry: EntryInterface;
}

const Entry: NextPage<Props> = ({ entry: { _id, content, createdAt } }) => {
  const [entryContent, setEntryContent] = useState(content);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEntryContent(event.target.value);
  };

  return (
    <MainLayout>
      <EntryContainer>
        <CardHeader title={entryContent} subheader={distanteToNow(createdAt)} />
        <CardContent sx={{ marginTop: "-20px" }}>
          <TextField
            label="Entrada"
            variant="outlined"
            multiline
            autoFocus
            fullWidth
            value={entryContent}
            onChange={handleChange}
            margin="normal"
          />
        </CardContent>
        <EntryActionsButtons id={_id} content={entryContent} />
      </EntryContainer>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context?.params?.id as string;
  const entry = await getEntryById(id);
  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      entry: JSON.parse(JSON.stringify(entry)),
    },
  };
};

export default Entry;
