import { useEffect, useState } from "react";
import QuestionCard from "../questionCard";
import { VStack } from "@chakra-ui/react";
import styles from "./questionHistory.module.scss";

interface Question {
  id: number;
  question: string;
  category?: string;
  deepness?: number;
}

type Props = {
  questionList: Question[];
  isOpen: boolean;
  onClose: () => void;
};

const QuestionHistory = ({ questionList, isOpen, onClose }: Props) => {
  const [orderedList, setOrderedList] = useState<Question[]>([]);

  useEffect(() => {
    const list = [...questionList];
    list.reverse();
    list.pop();
    setOrderedList(list);
  }, [questionList]);

  return (
    <VStack
      spacing={4}
      w="100%"
      className={styles.questionHistory}
      style={{ overflow: "auto", maxHeight: "calc(100vh - 150)" }}
    >
      {orderedList.map((item, index) => (
        <QuestionCard question={item} key={index} />
      ))}
    </VStack>
  );
};

export default QuestionHistory;
