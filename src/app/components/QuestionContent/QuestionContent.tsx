import { Question } from "@/utils/interfaces";
import QuestionLabel from "../QuestionLabel";
import AnswerLabel from "../AnswerLabel";
import { useState } from "react";

interface QuestionContentProps {
  question: Question;
  selectedAnswerId: number;
  selectAnswer: (id: number) => void;
}

export default function QuestionContent({ question }: QuestionContentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState(0);

  const handleSelectedAnswer = () => {
    setSelectedAnswer(!selectedAnswer);
  };

  const handleSelectedAnswerId = (answerId: number) => {
    setSelectedAnswerId(answerId);
    handleSelectedAnswer();
    console.log(`Selected answer id: ${answerId}`);
  };

  return (
    <>
      <QuestionLabel value={question.question} />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={1}
        asnwerValue={question.answer1}
        selectAnswer={handleSelectedAnswerId}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={2}
        asnwerValue={question.answer2}
        selectAnswer={handleSelectedAnswerId}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={3}
        asnwerValue={question.answer3}
        selectAnswer={handleSelectedAnswerId}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={4}
        asnwerValue={question.answer4}
        selectAnswer={handleSelectedAnswerId}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={5}
        asnwerValue={question.answer5}
        selectAnswer={handleSelectedAnswerId}
      />
    </>
  );
}
