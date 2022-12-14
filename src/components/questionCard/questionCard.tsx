import {
  Flex,
  Badge,
  Text,
  useColorModeValue,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { Question } from "../../types";
import { copyStringToClipboard } from "../../helper/helpers";

type Props = {
  question: Question;
  message?: string;
  isSkipped?: boolean;
  answeredNow?: () => void;
};

const QuestionCard = ({ question, message, isSkipped, answeredNow }: Props) => {
  const background = useColorModeValue("gray.100", "gray.700");
  const shadow = useColorModeValue("xl", "dark-lg");
  const questionStyle = isSkipped ? "italic" : "normal";
  const questionColour = isSkipped ? "red.400" : undefined;
  const toast = useToast();

  const handleClipboard = () => {
    copyStringToClipboard(question.question);
    toast({
      description: "Coppied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

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
      {isSkipped && (
        <Button
          onClick={answeredNow}
          pos="absolute"
          top="6px"
          left="8px"
          size="xs"
          variant="outline"
        >
          Answered now
        </Button>
      )}
      {!message && (
        <IconButton
          aria-label="Copy to Clipboard"
          icon={<MdContentCopy />}
          variant="ghost"
          pos="absolute"
          top="6px"
          right="8px"
          onClick={handleClipboard}
        />
      )}
      <Text fontSize="2xl" fontStyle={questionStyle} color={questionColour}>
        {message ? message : question.question}
      </Text>
      {!message && question.category && (
        <Badge pos="absolute" bottom="6px" right="8px">
          {question.category}
        </Badge>
      )}
      {/* Removed deepness */}
      {/* {!message && question.deepness && (
        <Badge pos='absolute' top='6px' right='8px'>
          {question.deepness}
        </Badge>
      )} */}
    </Flex>
  );
};

export default QuestionCard;
