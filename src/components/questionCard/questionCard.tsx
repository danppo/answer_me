import { Flex, Badge, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  question: {
    id: number;
    question: string;
    category?: string;
    deepness?: number;
  };
  message?: string;
  history?: boolean;
};

const QuestionCard = ({ question, message, history }: Props) => {
  const background = useColorModeValue("gray.100", "gray.700");
  const shadow = useColorModeValue("xl", "dark-lg");

  return (
    <Flex
      pos="relative"
      w="100%"
      minH="180px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      py="26px"
      boxShadow={shadow}
      justifyContent="center"
      alignItems="center"
      bg={background}
    >
      {/* {!message && history && (
        <Badge pos="absolute" bottom="6px" right="8px">
          {question.category}
        </Badge>
      )} */}
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
