import { Box, Flex, Badge, Text } from "@chakra-ui/react";
import { MdFormatQuote } from "react-icons/md";

type Props = {
  question: {
    id: number;
    question: string;
    category?: string;
    deepness?: number;
  };
};

const QuestionCard = ({ question }: Props) => {
  return (
    <Flex
      pos="relative"
      w="100%"
      minH="180px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      py="26px"
      boxShadow="dark-lg"
      justifyContent="center"
      alignItems="center"
      bg="gray.700"
    >
      <MdFormatQuote size="150px" />
      <Text fontSize="3xl">{question.question}</Text>
      {question.category && (
        <Badge pos="absolute" bottom="6px" right="8px">
          {question.category}
        </Badge>
      )}
      {question.deepness && (
        <Badge pos="absolute" top="6px" right="8px">
          {question.deepness}
        </Badge>
      )}

      {/* <Badge>3</Badge> */}
    </Flex>
  );
};

export default QuestionCard;
