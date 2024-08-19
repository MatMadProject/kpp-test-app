import { useState } from "react";

interface AnswerLabelProps {
  asnwerValue: string;
  answerId: number;
  isAnswerSelected?: boolean;
  selectedAnswerId: number;
  selectAnswer: (id: number) => void;
}

export default function AnswerLabel({
  asnwerValue,
  answerId,
  selectedAnswerId,
  selectAnswer,
}: AnswerLabelProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    selectAnswer(answerId);
    setIsSelected(!isSelected);
  };
  return (
    <div
      onClick={handleClick}
      className={`h-16 w-3/5 text-sm text-center p-2 rounded-lg border border-neutral-700 hover:opacity-100 
        ${
          selectedAnswerId === answerId
            ? "bg-sky-300/60 opacity-100"
            : "bg-neutral-800/30 opacity-50"
        }`}
    >
      {asnwerValue}
    </div>
  );
}
