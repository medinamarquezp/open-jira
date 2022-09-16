import type { NextPage } from "next";
import { MainLayout } from "../components/layouts/MainLayout";
import { EntriesList } from "../components/ui/entries/EntriesList";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <EntriesList title="TODO" slug="todo" />
      <EntriesList title="DOING" slug="doing" />
      <EntriesList title="DONE" slug="done" />
    </MainLayout>
  );
};

export default Home;
