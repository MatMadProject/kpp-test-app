import { Question } from "@/utils/interfaces";
import QuestionLabel from "../QuestionLabel";
import AnswerLabel from "../AnswerLabel";
import { useState } from "react";

interface QuestionContentProps {
  question: Question;
  selectedAnswerId: number;
  selectAnswer: (id: number) => void;
  isDisplayCorrectAnswer: boolean;
}

export default function QuestionContent({
  question,
  selectedAnswerId,
  selectAnswer,
  isDisplayCorrectAnswer,
}: QuestionContentProps) {
  const handleSelectedAnswerId = (answerId: number) => {
    selectAnswer(answerId);
  };

  return (
    <>
      <QuestionLabel value={question.question} />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={1}
        asnwerValue={question.answer1}
        selectAnswer={handleSelectedAnswerId}
        isDisplayCorrectAnswer={isDisplayCorrectAnswer}
        correctAnswerId={Number(question.correctAnswer)}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={2}
        asnwerValue={question.answer2}
        selectAnswer={handleSelectedAnswerId}
        isDisplayCorrectAnswer={isDisplayCorrectAnswer}
        correctAnswerId={Number(question.correctAnswer)}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={3}
        asnwerValue={question.answer3}
        selectAnswer={handleSelectedAnswerId}
        isDisplayCorrectAnswer={isDisplayCorrectAnswer}
        correctAnswerId={Number(question.correctAnswer)}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={4}
        asnwerValue={question.answer4}
        selectAnswer={handleSelectedAnswerId}
        isDisplayCorrectAnswer={isDisplayCorrectAnswer}
        correctAnswerId={Number(question.correctAnswer)}
      />
      <AnswerLabel
        selectedAnswerId={selectedAnswerId}
        answerId={5}
        asnwerValue={question.answer5}
        selectAnswer={handleSelectedAnswerId}
        isDisplayCorrectAnswer={isDisplayCorrectAnswer}
        correctAnswerId={Number(question.correctAnswer)}
      />
    </>
  );
}
