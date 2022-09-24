import { ChangeEvent, useContext, useState } from "react";
import { isValidObjectId } from "mongoose";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import { useRouter } from "next/router";

import { CardContent, CardHeader, TextField } from "@mui/material";

import { distanteToNow } from "services/dates.service";
import { MainLayout } from "@/components/layouts/MainLayout";
import { getEntryById } from "repositories/entries.repository";
import { EntriesContext } from "@/context/entries/EntriesContext";
import { EntryContainer } from "@/components/entry/EntryContainer";
import { EntryInterface, Status } from "interfaces/EntriesInterfaces";
import { EntryActionsButtons } from "@/components/entry/EntryActionsButtons";
import { EntryStatusSelector } from "@/components/entry/EntryStatusSelector";

interface Props {
  entry: EntryInterface;
}

const Entry: NextPage<Props> = ({
  entry: { _id, content, status, createdAt },
}) => {
  const router = useRouter();
  const { updateEntry } = useContext(EntriesContext);
  const [entryStatus, setEntryStatus] = useState<Status>(status);
  const [entryContent, setEntryContent] = useState(content);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEntryContent(event.target.value);
  };

  const handleSave = () => {
    updateEntry(_id, { content: entryContent, status: entryStatus });
    router.push("/");
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
        <EntryStatusSelector status={entryStatus} setStatus={setEntryStatus} />
        <EntryActionsButtons handleSave={handleSave} />
      </EntryContainer>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const redirect = () => {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  };
  const id = context?.params?.id as string;
  if (!isValidObjectId(id)) return redirect();
  const entry = await getEntryById(id);
  if (!entry) return redirect();
  return {
    props: {
      entry: JSON.parse(JSON.stringify(entry)),
    },
  };
};

export default Entry;
