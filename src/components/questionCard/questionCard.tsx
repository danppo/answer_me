import { Box, Flex, Badge } from "@chakra-ui/react";

type Props = {
  id: number;
  question: string;
  category: string;
  deepness: number;
};

const QuestionCard = () => {
  return (
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
  );
};

export default QuestionCard;
