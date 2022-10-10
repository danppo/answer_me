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
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdBuild, MdCall, MdFilterList, MdRedo } from "react-icons/md";

import { useEffect, useState } from "react";
import QuestionCard from "../components/questionCard";
import Filter from '../components/filter';

import questionData from "../questions.json";

interface Question {
  id: number;
  question: string;
  category?: string;
  deepness?: number;
}

const Questions = () => {
  const initialQuestionState = {
    id: -1,
    question: "Press the button for the first question",
  };
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [depthLevelList, setDepthLevelList] = useState<number[]>([]);
  const [questionHistory, setQuestionHistory] = useState<Question[]>([
    initialQuestionState,
  ]);
  const [gameStarted, setGameStarted] = useState(false);
  const [availableQuestionList, setAvailableQuestionList] = useState<Question[]>(questionData);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const { isOpen, onToggle } = useDisclosure()


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

  const handleNextQuestion = () => {
    const length = availableQuestionList.length;
    const chosen = Math.floor(Math.random() * length);
    const question = availableQuestionList[chosen];
    const tempArray = [...availableQuestionList];
    tempArray.splice(chosen, 1);
    setAvailableQuestionList(tempArray);

    if (gameStarted) {
      setQuestionHistory((current) => [question, ...current]);
    } else {
      setQuestionHistory([question]);
      setGameStarted(true);
    }
  };

  const filterToggle = () => {

  }

  return (
    <VStack spacing={8}>
      <QuestionCard question={questionHistory[0]} />

      <ButtonGroup gap="2" width="100%">
        <IconButton
          onClick={onToggle}
          aria-label="Search database"
          icon={<MdFilterList />}
          height="56px"
          width="74px"
        />
        <Button
          onClick={handleNextQuestion}
          colorScheme="teal"
          size="lg"
          width="100%"
          height="56px"
        >
          {gameStarted ? "Next Question" : "Let's start"}
        </Button>
        <IconButton
          aria-label="Search database"
          icon={<MdRedo />}
          height="56px"
          width="74px"
        />
      </ButtonGroup>

    {isOpen && 
      <Filter categories={categoryList} selectedCats={setSelectedCats}/>   
    }



    </VStack>
  );
};

export default Questions;
