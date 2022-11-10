import { Flex } from "@chakra-ui/react";
import Questions from "../questions";
import Header from "../header";
import Footer from "../footer";
import { useState } from "react";

const QuestionPage = () => {
  const [resetQuestions, setResetQuestions] = useState(false);
  const reset = () => setResetQuestions(!resetQuestions);
  return (
    <Flex
      textAlign="center"
      justifyContent="center"
      fontSize="xl"
      style={{ position: "relative", height: "100vh" }}
      className="AppFlex"
    >
      <Flex
        minH="100vh"
        w="xl"
        p={3}
        alignItems="center"
        direction="column"
        justify="space-between"
      >
        <Header resetQuestions={reset} />
        <Questions resetQuestionList={resetQuestions} />
        <Footer />
      </Flex>
    </Flex>
  );
};

export default QuestionPage;
