interface AnswerLabelProps {
  asnwerValue: string;
}

export default function AnswerLabel({ asnwerValue }: AnswerLabelProps) {
  return (
    <div className="opacity-50 w-1/2 text-center p-4 rounded-lg border border-neutral-700 bg-neutral-800/30 hover:opacity-100">
      <p>{asnwerValue}</p>
    </div>
  );
}
