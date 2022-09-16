import type { NextPage } from "next";

import { MainLayout } from "@/components/layouts/MainLayout";
import { EntriesList } from "@/components/entries/EntriesList";
import { EntriesContainer } from "@/components/entries/EntriesContainer";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <EntriesContainer>
        <EntriesList title="TODO" slug="todo" />
        <EntriesList title="DOING" slug="doing" />
        <EntriesList title="DONE" slug="done" />
      </EntriesContainer>
    </MainLayout>
  );
};

export default Home;
