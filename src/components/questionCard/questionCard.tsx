import { Flex, Badge, Text } from "@chakra-ui/react";

type Props = {
  question: {
    id: number;
    question: string;
    category?: string;
    deepness?: number;
  };
  message?: string;
};

const QuestionCard = ({ question, message }: Props) => {
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
      {/* <MdFormatQuote size="150px" /> */}
      <Text fontSize="2xl">{message ? message : question.question}</Text>
      {!message && question.category && (
        <Badge pos="absolute" bottom="6px" right="8px">
          {question.category}
        </Badge>
      )}
      {!message && question.deepness && (
        <Badge pos="absolute" top="6px" right="8px">
          {question.deepness}
        </Badge>
      )}
    </Flex>
  );
};

export default QuestionCard;
