// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import HandedPieChart from "components/Charts/HandedPieChart";
// Custom icons
import {
  CartIcon,
  PersonIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";

import { tablesTableData,dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import Leaderboard from "./components/Leaderboard";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import HandedOverview from "./components/HandedOverview";
import GenderPiechart from "components/Charts/GenderPieChart";
import GenderOverview from "./components/GenderOverview";
import AgeGroupPieChart from "components/Charts/AgeGroupPieChart";
import AgeStatistics from "./components/AgeStatistics";
import BowlingActionTypeOverview from "./components/BowlingActionTypeOverview";
import BowlingActionPieChart from "components/Charts/BlowingActionPieChart";
import BowlingAPieChart from "components/Charts/BowlingAPieChart";
import BowlingATypeOverview from "./components/BowlingATypeOverview";
import HeightOverview from "./components/HeightOverview";
import HeightHistogram from "components/Charts/HeightHistrogram";
import React, { useState, useEffect } from "react";
import axios from "axios";





// import LineChart from "components/Charts/LineChart"; 

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Users"}
          amount={1541}
          icon={<PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Recruiters"}
          amount={254}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Jobs posted"}
          amount={600}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Jobs filled"}
          amount={350}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />

      </SimpleGrid>
      <SimpleGrid marginTop={15} columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
      <HandedOverview
          title={"User Domains"}
          chart={<HandedPieChart />}
        />
        <GenderOverview
          title = {"Gender"}
          chart={<GenderPiechart />}
          />
        <AgeStatistics
          title = {"Age group"}
          chart={<AgeGroupPieChart />}
          />
        <BowlingActionTypeOverview
          title = {"Employment"}
          chart={<BowlingActionPieChart />}
          />
      </SimpleGrid>
      <SimpleGrid marginTop={15} columns={{ sm: 1, md: 1, xl: 2 }} spacing='24px'>
      <HeightOverview
      title={"User's Regional Distribution"}
      chart={<HeightHistogram />}
      />
      {/* <HeightOverview
      title={"Weight Distribution"}
      chart={<HeightHistogram />} */}
      {/* /> */}
      <BowlingATypeOverview
          title = {"Advertisement Channel"}
          chart={<BowlingAPieChart />}
          />

      </SimpleGrid>
      
     {/* <Grid>
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}
        <ActiveUsers
          title={"المستخدمين النشطين"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"نظرة عامة على المبيعات"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid> */}

{/* <SimpleGrid></SimpleGrid> */}
      <Grid
        templateColumns={{ md: "1fr", lg: "1" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        
          <Leaderboard 
          title={"Top Recruiters"}
          captions={["Recruiter", "Domain", "Hired", "Region","Owner","Type","Email"]}
          data={tablesTableData}
          />
      </Grid>
      
    </Flex>
  );
}
