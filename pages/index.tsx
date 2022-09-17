import type { NextPage } from "next";

import { MainLayout } from "@/components/layouts/MainLayout";
import { EntriesList } from "@/components/entries/EntriesList";
import { EntriesContainer } from "@/components/entries/EntriesContainer";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <EntriesContainer>
        <EntriesList title="TODO" status="todo" />
        <EntriesList title="DOING" status="doing" />
        <EntriesList title="DONE" status="done" />
      </EntriesContainer>
    </MainLayout>
  );
};

export default Home;
