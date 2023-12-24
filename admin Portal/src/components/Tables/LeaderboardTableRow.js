import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function LeaderboardTableRow(props) {
  const { logo, name, ball_speed,run_up,jump,BFC,FFC,Release } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
      <Text fontSize="md" color={textColor} fontWeight="bold">
            {ball_speed}
          </Text>          
      </Td>
      <Td>
      <Text fontSize="md" color={textColor} fontWeight="bold">
            {run_up}
          </Text>          
     </Td>
      <Td>
      <Text fontSize="md" color={textColor} fontWeight="bold">
            {jump}
          </Text>          
      </Td>
      <Td>
      <Text fontSize="md" color={textColor} fontWeight="bold">
            {BFC}
          </Text>
      </Td>
      <Td>
      <Text fontSize="md" color={textColor} fontWeight="bold">
            {FFC}
          </Text>
      </Td>
      <Td>
      <Text fontSize="md" color={textColor} fontWeight="bold">
            {Release}
          </Text>
      </Td>
    </Tr>
  );
}

export default LeaderboardTableRow;
