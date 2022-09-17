import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "@/themes/dark.theme";
import { UIProvider } from "@/context/ui/UIProvider";
import { EntriesProvider } from "../context/entries/EntriesProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
