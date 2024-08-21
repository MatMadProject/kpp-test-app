import { Question } from "@/utils/interfaces";
import QuestionLabel from "../QuestionLabel";
import TestAnswerLabel from "../TestAnswerLabel";

interface TestQuestionContentProps {
  question: Question;
  selectedAnswerId: string;
  selectAnswer: (id: string) => void;
  isDisplayCorrectAnswer?: boolean;
}

export default function TestQuestionContent({
  question,
  selectedAnswerId,
  selectAnswer,
  isDisplayCorrectAnswer,
}: TestQuestionContentProps) {
  const handleSelectedAnswerId = (answerId: string) => {
    selectAnswer(answerId);
  };

  return (
    <>
      <QuestionLabel value={question.question} />
      <TestAnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={"1"}
        asnwerValue={question.answer1}
        selectAnswer={handleSelectedAnswerId}
      />
      <TestAnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={"2"}
        asnwerValue={question.answer2}
        selectAnswer={handleSelectedAnswerId}
      />
      <TestAnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={"3"}
        asnwerValue={question.answer3}
        selectAnswer={handleSelectedAnswerId}
      />
      <TestAnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={"4"}
        asnwerValue={question.answer4}
        selectAnswer={handleSelectedAnswerId}
      />
      <TestAnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={"5"}
        asnwerValue={question.answer5}
        selectAnswer={handleSelectedAnswerId}
      />
    </>
  );
}
