import { useState } from "react";

interface AnswerLabelProps {
  asnwerValue: string;
  answerId: number;
  isAnswerSelected?: boolean;
  selectedAnswerId: number;
  selectAnswer: (id: number) => void;
  isDisplayCorrectAnswer?: boolean;
  correctAnswerId: number;
}

export default function AnswerLabel({
  asnwerValue,
  answerId,
  selectedAnswerId,
  selectAnswer,
  isDisplayCorrectAnswer,
  correctAnswerId,
}: AnswerLabelProps) {
  const handleClick = () => {
    selectAnswer(answerId);
  };

  const displayCorrectAnswer =
    isDisplayCorrectAnswer && correctAnswerId === answerId;
  const displaySelectedAnswer =
    selectedAnswerId === answerId && correctAnswerId !== answerId;
  return (
    <div
      onClick={handleClick}
      className={`flex items-center h-16 w-3/5 text-sm p-2 rounded-lg border border-neutral-700 hover:opacity-100 
        
        ${
          displayCorrectAnswer
            ? "transition delay-300 duration-700 bg-green-500 opacity-100"
            : displaySelectedAnswer
            ? "transition delay-300 duration-700 bg-red-500 opacity-100"
            : "bg-neutral-800/30 opacity-50"
        }
        
        `}
    >
      {asnwerValue}
    </div>
  );
}
