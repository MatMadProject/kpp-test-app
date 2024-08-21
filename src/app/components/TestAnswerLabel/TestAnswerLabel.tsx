import { useState } from "react";

interface TestAnswerLabelProps {
  asnwerValue: string;
  answerId: string;
  isAnswerSelected?: boolean;
  selectedAnswerId: string;
  selectAnswer: (id: string) => void;
}

export default function TestAnswerLabel({
  asnwerValue,
  answerId,
  selectedAnswerId,
  selectAnswer,
}: TestAnswerLabelProps) {
  const handleClick = () => {
    selectAnswer(answerId);
  };

  const displaySelectedAnswer = selectedAnswerId === answerId;
  return (
    <div
      onClick={handleClick}
      className={`${
        displaySelectedAnswer ? "opacity-100" : "opacity-50"
      } flex items-center h-16 w-3/5 text-sm p-2 rounded-lg border border-neutral-700  bg-neutral-800/30  hover:opacity-100 `}
    >
      {asnwerValue}
    </div>
  );
}
