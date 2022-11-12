import React from 'react';
import { VStack, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { MdRedo, MdHistory, MdClose } from 'react-icons/md';

import { useEffect, useState } from 'react';
import QuestionCard from '../../components/questionCard';
import Filter from '../../components/filter';
import QuestionHistory from '../../components/questionHistory';
import classNames from 'classnames';
import styles from './questions.module.scss';

import questionData from '../../data/questions.json';

import { Question } from '../../types';

type Props = {
  resetQuestionList: boolean;
};

const Questions = ({ resetQuestionList }: Props) => {
  const [message, setMessage] = useState<string>('Press the button for the first question');
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [depthLevelList, setDepthLevelList] = useState<number[]>([]);
  const [questionHistory, setQuestionHistory] = useState<Question[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>(questionData);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [historyAvailable, setHistoryAvailable] = useState(false);
  const [catsNoQuestionsLeft, setCatsNoQuestionsLeft] = useState<string[]>([]);
  const [questionButtonDisabled, setQuestionButtondisabled] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    if (resetTrigger !== resetQuestionList) {
      setQuestionHistory([]);
      setAvailableQuestions(questionData);
      setGameStarted(false);
      setSelectedCats(categoryList);
      setSkippedQuestions([]);
      setMessage('The questions and filters have been reset');
      setCatsNoQuestionsLeft([]);

      setResetTrigger(resetQuestionList);
    }
  }, [resetQuestionList, resetTrigger, categoryList]);

  // Fetch the catagory and depth lists
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
    setSelectedCats(tempCat.sort());
    setDepthLevelList(tempLevel.sort());
  }, []);

  // Filter questions if catagory selected
  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCats, availableQuestions]);

  // Dertermine if history can be shown
  useEffect(() => {
    questionHistory.length > 1 ? setHistoryAvailable(true) : setHistoryAvailable(false);
  }, [questionHistory]);

  const handleNextQuestion = () => {
    const length = filteredQuestions.length;

    if (length > 0) {
      setMessage('');
      const chosen = Math.floor(Math.random() * length);
      const question = filteredQuestions[chosen];
      const tempArray = [...filteredQuestions];
      tempArray.splice(chosen, 1);
      setFilteredQuestions(tempArray);

      setAvailableQuestions(availableQuestions.filter((q) => q.id !== question.id));

      setQuestionHistory((current) => [question, ...current]);
      if (!gameStarted) {
        setGameStarted(true);
        setMessage('');
      }
    } else {
      setQuestionButtondisabled(true);
      selectedCats.forEach((cat) => {
        if (!catsNoQuestionsLeft.includes(cat)) {
          setCatsNoQuestionsLeft([...catsNoQuestionsLeft, cat]);
        }
      });
      setMessage(
        'No more questions left, either change the filter settings or rest all the questions'
      );
    }
  };
  const handleSkipped = () => {
    setSkippedQuestions([...skippedQuestions, questionHistory[0].id]);
    handleNextQuestion();
  };

  const handleSelectedCatChanges = () => {
    if (questionHistory.length > 0) {
      setQuestionButtondisabled(false);
      if (questionHistory[0].category && !selectedCats.includes(questionHistory[0].category)) {
        const historyList = questionHistory;
        historyList.shift();
        setQuestionHistory(historyList);
        handleNextQuestion();
      }
    }
  };

  const answeredNow = (id: number) => {
    const removed = skippedQuestions.filter((i) => i !== id);
    setSkippedQuestions(removed);
  };

  return (
    <VStack spacing={8} w='100%' className='Stack' data-testid='Questions'>
      {historyAvailable && (
        <IconButton
          aria-label='View History'
          icon={showHistory ? <MdClose /> : <MdHistory />}
          alignSelf='end'
          onClick={() => setShowHistory(!showHistory)}
        />
      )}
      {showHistory && (
        <QuestionHistory
          questionList={questionHistory}
          skippedList={skippedQuestions}
          answeredNow={answeredNow}
        />
      )}

      {!showHistory && (
        <>
          <QuestionCard question={questionHistory[0]} message={message} />
          <ButtonGroup
            gap='2'
            width='100%'
            marginBottom='10px'
            className={classNames({ [styles.bottomMargin]: historyAvailable })}
          >
            <Filter
              categories={categoryList}
              selectedCats={selectedCats}
              setSelectedCats={setSelectedCats}
              onCloseModal={handleSelectedCatChanges}
              noQuestionsLeftCats={catsNoQuestionsLeft}
            />
            <Button
              onClick={handleNextQuestion}
              colorScheme='teal'
              size='lg'
              width='100%'
              height='56px'
              disabled={questionButtonDisabled}
              data-testid='nextQuestion'
            >
              {gameStarted ? 'Next Question' : "Let's start"}
            </Button>
            <IconButton
              aria-label='Skip question'
              icon={<MdRedo />}
              height='56px'
              width='74px'
              onClick={handleSkipped}
              disabled={questionHistory.length === 0}
            />
          </ButtonGroup>
        </>
      )}
    </VStack>
  );
};

export default Questions;
