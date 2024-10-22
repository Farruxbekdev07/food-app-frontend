import { Box, Container } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { SIDEBAR_LIST } from "../../components/Sidebar/constants";
import Header from "../../components/Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Sidebar links={SIDEBAR_LIST} />
        <Header />
      </Box>
    </Container>
  );
};

export default Home;
