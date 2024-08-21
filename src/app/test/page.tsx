"use client";
import NavigationButton from "../components/NavigationButton";

import { useEffect, useState } from "react";
import { Question } from "@/utils/interfaces";
import { createTestQuestion } from "@/utils/testFactory";
import TestQuestionContent from "../components/TestQuestionContent";

export default function Page() {
  const [questionId, setQuestionId] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("0");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question>(questions[0]);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const testQuestions = createTestQuestion();
    setQuestions(testQuestions);
    setQuestion(questions[questionId - 1]);
  }, []);

  const resetAnswer = () => {
    handleSelectedAnswer("0");
  };
  const handleNextQuestion = () => {
    questionId < questions.length
      ? setQuestionId(questionId + 1)
      : setQuestionId(1);
    resetAnswer();
  };

  const handlePreviousQuestion = () => {
    questionId > 1
      ? setQuestionId(questionId - 1)
      : setQuestionId(questions.length);
    resetAnswer();
  };

  useEffect(() => {
    setQuestion(questions[questionId - 1]);
    // if (question && question.selectedAnswer !== "0") {
    //   setSelectedAnswer(question.selectedAnswer);
    // }
  });
  const handleSelectedAnswer = (answerId: string) => {
    setSelectedAnswer(answerId);
    if (answerId !== "0") question.selectedAnswer = answerId;
  };
  return (
    <div className="flex flex-col gap-4  items-center p-4">
      {question && (
        <TestQuestionContent
          question={question}
          selectedAnswerId={selectedAnswer}
          selectAnswer={handleSelectedAnswer}
        />
      )}
      <div className="flex justify-between w-3/5">
        <NavigationButton
          onClick={handlePreviousQuestion}
          value="Poprzednie pytanie"
        />
        <div className="flex flex-col items-center justify-center">
          <div>Pytanie {questionId} z 30</div>
          <div>{time}</div>
        </div>
        <NavigationButton
          onClick={handleNextQuestion}
          value="Następne pytanie"
        />
      </div>
    </div>
  );
}
