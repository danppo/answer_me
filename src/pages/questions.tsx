import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Select,
  Button,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QuestionCard from "../components/questionCard";

import questionData from "../questions.json";

const Questions = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [depthLevelList, setDepthLevelList] = useState<number[]>([]);

  useEffect(() => {
    const tempCat: string[] = [];
    const tempLevel: number[] = [];
    questionData.forEach((q) => {
      if (!tempCat.includes(q.category)) {
        tempCat.push(q.category);
      }
      if (!tempLevel.includes(q.deepness)) {
        tempLevel.push(q.deepness);
      }
    });

    setCategoryList(tempCat.sort());
    setDepthLevelList(tempLevel.sort());
  }, []);

  // console.log(categoryList);
  // console.log(depthLevelList);

  return (
    <VStack spacing={8}>
      <QuestionCard />
      <Flex
        pos="relative"
        w="100%"
        minH="100px"
        borderRadius="lg"
        overflow="hidden"
        p="3"
        py="26px"
        boxShadow="dark-lg"
        justifyContent="center"
        alignItems="center"
        bg="gray.700"
      >
        <Box>What's your favorite way to spend a day off?</Box>
        <Badge pos="absolute" bottom="6px">
          Likes
        </Badge>
        <Badge>3</Badge>
      </Flex>
      <Flex
        pos="relative"
        w="100%"
        minH="100px"
        borderRadius="lg"
        overflow="hidden"
        p="3"
        py="26px"
        boxShadow="dark-lg"
        justifyContent="center"
        alignItems="center"
        bg="gray.700"
      >
        <Box>What's your favorite way to spend a day off?</Box>
        <Badge pos="absolute" bottom="6px">
          Likes
        </Badge>
        <Badge>3</Badge>
      </Flex>
      <Button colorScheme="teal" size="lg">
        Button
      </Button>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Text>
        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
      </Text>
      <Link
        color="teal.500"
        href="https://chakra-ui.com"
        fontSize="2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Chakra
      </Link>
    </VStack>
  );
};

export default Questions;
