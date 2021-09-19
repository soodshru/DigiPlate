import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Achievement from "../components/Achievements";
import DriverScore from "../components/DriverScore";
import Header from "../components/header";
import Speedometer from "../components/Speedometer";
import Treemap from "../components/Treemap";

function Dashboard() {

  return (
    <Box style={{position: 'fixed', backgroundColor: "#ebeff2", height: "100%", width: "100%", top:0, left:0, overflowY: 'scroll' }}>
      <Header />
      <Container style= {{marginTop: '3rem'}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Speedometer />
        <DriverScore />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', marginBottom: '3rem' }}>
        <Treemap/>
        <Achievement/>
        </Box> 
      </Container>
    </Box>
  );
}

export default Dashboard;
