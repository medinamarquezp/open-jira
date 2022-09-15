import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Grid } from "@mui/material";

import { Header } from "../ui/template/Header";
import { Sidebar } from "../ui/template/Sidebar";
interface Props extends PropsWithChildren {
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title = "OpenJira" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Sidebar />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop="1px"
      >
        {children}
      </Grid>
    </>
  );
};
