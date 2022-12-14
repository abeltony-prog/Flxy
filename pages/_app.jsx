import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme/theme";
import { SessionProvider } from "next-auth/react"
import createEmotionCache from "../src/createEmotionCache";
import FullLayout from "../src/layouts/FullLayout";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// config.autoAddCss = false;
export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: {session ,...pageProps },
  } = props;
  return (
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
            <SessionProvider session={session}>
            <FullLayout>
              <Component {...pageProps} />
            </FullLayout>
            </SessionProvider>
          </ThemeProvider>
        </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
