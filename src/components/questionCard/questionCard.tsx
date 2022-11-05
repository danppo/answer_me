import { Flex, Badge, Text, useColorModeValue, Button, IconButton } from '@chakra-ui/react';
import { MdContentCopy } from 'react-icons/md';
import { Question } from '../../types';

type Props = {
  question: Question;
  message?: string;
  history?: boolean;
  isSkipped?: boolean;
  answeredNow?: () => void;
};

const QuestionCard = ({ question, message, history, isSkipped, answeredNow }: Props) => {
  const background = useColorModeValue('gray.100', 'gray.700');
  const shadow = useColorModeValue('xl', 'dark-lg');
  const questionStyle = isSkipped ? 'italic' : 'normal';
  const questionColour = isSkipped ? 'red.400' : undefined;

  // function to handle copying and toast

  return (
    <Flex
      pos='relative'
      w='100%'
      minH='180px'
      borderRadius='lg'
      overflow='hidden'
      p='6'
      py='26px'
      boxShadow={shadow}
      justifyContent='center'
      alignItems='center'
      bg={background}
    >
      {isSkipped && (
        <Button
          onClick={answeredNow}
          pos='absolute'
          top='6px'
          left='8px'
          size='xs'
          variant='outline'
        >
          Answered now
        </Button>
      )}
      <IconButton
        aria-label='Skip question'
        icon={<MdContentCopy />}
        variant='ghost'
        // set position
        // onClick={handleSkipped}
        // disabled={questionHistory.length === 0}
      />
      <Text fontSize='2xl' fontStyle={questionStyle} color={questionColour}>
        {message ? message : question.question}
      </Text>
      {!message && question.category && (
        <Badge pos='absolute' bottom='6px' right='8px'>
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
