interface QuestionLabelProps {
  value: string;
}

export default function QuestionLabel({ value }: QuestionLabelProps) {
  return (
    <div className="w-1/2 min-h-40 text-center p-4 rounded-lg border border-neutral-700 bg-neutral-800/30">
      <p>{value}</p>
    </div>
  );
}
