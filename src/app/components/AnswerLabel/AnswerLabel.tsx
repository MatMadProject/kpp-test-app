interface AnswerLabelProps {
  asnwerValue: string;
}

export default function AnswerLabel({ asnwerValue }: AnswerLabelProps) {
  return (
    <div className="opacity-50 h-16 w-3/5 text-sm text-center p-2 rounded-lg border border-neutral-700 bg-neutral-800/30 hover:opacity-100">
      {asnwerValue}
    </div>
  );
}
