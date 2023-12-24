// Chakra imports
import {
  Table,
  Tbody,
  Flex,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import LeaderboardTableRow from "components/Tables/LeaderboardTableRow";
import React from "react";

const Leaderboard = ({ title, captions, data }) => {
  let inputBg = useColorModeValue("white", "gray.800");
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden"}}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold' marginRight={"20px"}>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Grid>
          </Grid>      
      <Grid width={'100%'}>
          <Flex
            flexDirection='column'
            lineHeight='1.6'
            >
        <SearchBar />
        </Flex>
        <Table variant='simple' color={textColor} marginTop={"30px"} width={"100%"}>
          <Thead>
            <Tr my='.9rem' mx={"0px"} pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <LeaderboardTableRow
                  key={`${row.name}`}
                  name={row.name}
                  logo={row.logo}
                  ball_speed={row.ball_speed}
                  run_up={row.run_up}
                  jump={row.jump}
                  BFC={row.BFC}
                  FFC={row.FFC}
                  Release={row.Release}
                />
              );
            })}
          </Tbody>
        </Table>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Leaderboard;
