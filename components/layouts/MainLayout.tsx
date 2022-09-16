import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Header } from "../template/Header";
import { Sidebar } from "../template/Sidebar";
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
      {children}
    </>
  );
};
