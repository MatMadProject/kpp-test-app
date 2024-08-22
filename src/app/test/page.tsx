"use client";
import NavigationButton from "../components/NavigationButton";

import { useEffect, useRef, useState } from "react";
import { Question } from "@/utils/interfaces";
import { createTestQuestion, validateAnswers } from "@/utils/testFactory";
import TestQuestionContent from "../components/TestQuestionContent";
import { addMinutes, getFormattedTime } from "@/utils/time";
import Timer from "../components/Timer";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question>();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState(null);

  const fetchTest = async () => {
    const testQuestions = await createTestQuestion();
    setQuestions(testQuestions);
    setQuestion(testQuestions[0]);
  };

  useEffect(() => {
    fetchTest();
  }, []);

  const handleSubmit = async () => {
    const results = await validateAnswers(answers);
    console.log(results);
  };

  const handleNextQuestion = () => {
    const nextIndex =
      questionIndex === questions.length - 1 ? 0 : questionIndex + 1;
    setQuestionIndex(nextIndex);
    setQuestion(questions[nextIndex]);
  };

  const handlePreviousQuestion = () => {
    const prevIndex =
      questionIndex === 0 ? questions.length - 1 : questionIndex - 1;
    setQuestionIndex(prevIndex);
    setQuestion(questions[prevIndex]);
  };

  const handleSelectedAnswer = (answerId: string) => {
    if (question) {
      setAnswers({ ...answers, [question.id]: answerId });
    }
  };

  return (
    <div className="flex flex-col gap-4  items-center p-4">
      <button onClick={handleSubmit}>Submit</button>
      {question && (
        <TestQuestionContent
          question={question}
          selectedAnswerId={answers[question.id]}
          selectAnswer={handleSelectedAnswer}
        />
      )}
      <div className="flex justify-between w-3/5">
        <NavigationButton
          onClick={handlePreviousQuestion}
          value="Poprzednie pytanie"
        />
        <div className="flex flex-col items-center justify-center">
          <div>Pytanie {questionIndex + 1} z 30</div>
          {questions.length !== 0 && <Timer />}
        </div>
        <NavigationButton
          onClick={handleNextQuestion}
          value="Następne pytanie"
        />
      </div>
    </div>
  );
}
