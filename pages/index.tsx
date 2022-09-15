import {
  Card,
  CardContent,
  Grid,
  List,
  Paper,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { MainLayout } from "../components/layouts/MainLayout";
import { EntriesList } from "../components/ui/entries/EntriesList";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <EntriesList />
      <EntriesList />
      <EntriesList />
    </MainLayout>
  );
};

export default Home;
