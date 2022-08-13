import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"

import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
  Grid,
} from "@mui/material";
import Sigin from "../../src/components/Login";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { data: session } = useSession()
  if (session) {
    return (
      <>
    <MainWrapper>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#fbfbfb",
        }}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
      </>
    )
  }
  return (
    <MainWrapper Container spacing={0}>
      <Grid item xs={12} lg={12}>
      <Sigin xs={12} lg={12}/>
      </Grid>
    </MainWrapper>
  );
};

export default FullLayout;
