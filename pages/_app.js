import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme/theme";
import createEmotionCache from "../src/createEmotionCache";
import FullLayout from "../src/layouts/FullLayout";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// config.autoAddCss = false;
export default function MyApp(props) {
  const queryClient = new QueryClient();
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>Flxy</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <script src="https://accounts.google.com/gsi/client" async defer></script>
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FullLayout>
              <Component {...pageProps} />
            </FullLayout>
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
