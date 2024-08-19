import { Question } from "@/utils/interfaces";
import QuestionLabel from "../QuestionLabel";
import AnswerLabel from "../AnswerLabel";

interface QuestionContentProps {
  question: Question;
  selectedAnswer?: number;
}

export default function QuestionContent({ question }: QuestionContentProps) {
  return (
    <>
      <QuestionLabel value={question.question} />
      <AnswerLabel asnwerValue={question.answer1} />
      <AnswerLabel asnwerValue={question.answer2} />
      <AnswerLabel asnwerValue={question.answer3} />
      <AnswerLabel asnwerValue={question.answer4} />
      <AnswerLabel asnwerValue={question.answer5} />
    </>
  );
}
