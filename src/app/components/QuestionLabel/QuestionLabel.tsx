interface QuestionLabelProps {
  value: string;
}

export default function QuestionLabel({ value }: QuestionLabelProps) {
  return (
    <div className="w-3/5 h-40 text-m text-center p-2 rounded-lg border border-neutral-700 bg-neutral-800/30">
      <p>{value}</p>
    </div>
  );
}
