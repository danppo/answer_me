import { VStack, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MdRedo } from "react-icons/md";

import { useEffect, useState } from "react";
import QuestionCard from "../components/questionCard";
import Filter from "../components/filter";
import QuestionHistory from "../components/questionHistory";

import questionData from "../questions.json";

interface Question {
  id: number;
  question: string;
  category?: string;
  deepness?: number;
}

const Questions = () => {
  const [message, setMessage] = useState<string>(
    "Press the button for the first question"
  );
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [depthLevelList, setDepthLevelList] = useState<number[]>([]);
  const [questionHistory, setQuestionHistory] = useState<Question[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [availableQuestions, setAvailableQuestions] =
    useState<Question[]>(questionData);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

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

  useEffect(() => {
    console.log(selectedCats);
    const tempQuestions: Question[] = [];
    if (categoryList.length === selectedCats.length) {
      setFilteredQuestions(availableQuestions);
    } else {
      availableQuestions.forEach((q) => {
        if (q.category && selectedCats.includes(q.category)) {
          tempQuestions.push(q);
        }
      });

      if (selectedCats.length > 0) {
        setFilteredQuestions(tempQuestions);
      }
    }
    console.log(filteredQuestions.length);
    console.log(availableQuestions.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCats, availableQuestions]);

  // console.log(categoryList);
  // console.log(depthLevelList);

  const handleNextQuestion = () => {
    const length = filteredQuestions.length;
    console.log(length);

    if (length > 0) {
      const chosen = Math.floor(Math.random() * length);
      const question = filteredQuestions[chosen];
      const tempArray = [...filteredQuestions];
      tempArray.splice(chosen, 1);
      setFilteredQuestions(tempArray);

      setAvailableQuestions(
        availableQuestions.filter((q) => q.id !== question.id)
      );

      setQuestionHistory((current) => [question, ...current]);
      if (!gameStarted) {
        setGameStarted(true);
        setMessage("");
      }
    } else {
      setMessage(
        "No more questions left, either change the filter settings or rest all the questions"
      );
    }
  };

  return (
    <VStack spacing={8} w="100%" className="Stack">
      <IconButton
        aria-label="Skip question"
        icon={<MdRedo />}
        alignSelf="end"
        onClick={() => setShowHistory(!showHistory)}
      />
      {showHistory && <QuestionHistory questionList={questionHistory} />}
      <QuestionCard question={questionHistory[0]} message={message} />

      <ButtonGroup gap="2" width="100%">
        <Filter categories={categoryList} selectedCats={setSelectedCats} />
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
          aria-label="Skip question"
          icon={<MdRedo />}
          height="56px"
          width="74px"
        />
      </ButtonGroup>
    </VStack>
  );
};

export default Questions;
