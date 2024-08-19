"use client";
import NavigationButton from "../components/NavigationButton";
import Questions from "../../utils/question.json";
import QuestionContent from "../components/QuestionContent/QuestionContent";
import { useEffect, useState } from "react";
import { Question } from "@/utils/interfaces";

export default function Page() {
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState<Question>(Questions[questionId - 1]);

  const handleNextQuestion = () => {
    questionId < Questions.length
      ? setQuestionId(questionId + 1)
      : setQuestionId(1);
  };

  const handlePreviousQuestion = () => {
    questionId > 1
      ? setQuestionId(questionId - 1)
      : setQuestionId(Questions.length);
  };

  useEffect(() => {
    setQuestion(Questions[questionId - 1]);
  });
  return (
    <div className="flex flex-col gap-4  items-center p-4">
      <QuestionContent question={question} />
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
