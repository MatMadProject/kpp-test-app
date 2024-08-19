interface NavigationButtonProps {
  value: string;
  onClick: () => void;
}

export default function NavigationButton({
  value,
  onClick,
}: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="opacity-50 w-1/4 text-center p-4 rounded-lg border border-neutral-700 bg-neutral-800/30 hover:opacity-100"
    >
      {value}
    </button>
  );
}
