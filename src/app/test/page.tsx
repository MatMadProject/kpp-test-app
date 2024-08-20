"use client";
import NavigationButton from "../components/NavigationButton";

import QuestionContent from "../components/QuestionContent/QuestionContent";
import { useEffect, useState } from "react";
import { TestQuestion } from "@/utils/interfaces";
import { createTestQuestion } from "@/utils/testFactory";

export default function Page() {
  const [questionId, setQuestionId] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [test, setTest] = useState<TestQuestion[]>(createTestQuestion());
  const [question, setQuestion] = useState<TestQuestion>(test[questionId - 1]);
  const [isDisplayCorrectAnswer, setIsDisplayCorrectAnswer] = useState(false);

  const resetAnswer = () => {
    handleSelectedAnswer(0);
    setIsDisplayCorrectAnswer(false);
  };
  const handleNextQuestion = () => {
    questionId < test.length
      ? setQuestionId(questionId + 1)
      : setQuestionId(1);
    resetAnswer();
  };

  const handlePreviousQuestion = () => {
    questionId > 1
      ? setQuestionId(questionId - 1)
      : setQuestionId(test.length);
    resetAnswer();
  };

  useEffect(() => {
    setQuestion(test[questionId - 1]);
  });

  const handleSelectedAnswer = (answerId: number) => {
    setSelectedAnswer(answerId);
    setIsDisplayCorrectAnswer(true);
  };
  return (
    <div className="flex flex-col gap-4  items-center p-4">
      <QuestionContent
        question={question}
        selectedAnswerId={selectedAnswer}
        selectAnswer={handleSelectedAnswer}
        isDisplayCorrectAnswer={isDisplayCorrectAnswer}
      />
      <div className="flex justify-between w-3/5">
        <NavigationButton
          onClick={handlePreviousQuestion}
          value="Poprzednie pytanie"
        />
        <NavigationButton
          onClick={handleNextQuestion}
          value="Następne pytanie"
        />
      </div>
    </div>
  );
}