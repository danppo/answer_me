import QuestionCard from "../questionCard";

interface Question {
  id: number;
  question: string;
  category?: string;
  deepness?: number;
}

type Props = {
  questionList: Question[];
};

const QuestionHistory = ({ questionList }: Props) => {
  const orderedList = questionList;
  orderedList.reverse();

  return (
    <div className="History">
      {orderedList.map((item, index) => (
        <QuestionCard question={item} key={index} />
      ))}
    </div>
  );
};

export default QuestionHistory;
