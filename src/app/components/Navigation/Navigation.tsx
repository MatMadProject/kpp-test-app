import { FaUserSlash } from "react-icons/fa6";
export default function Navigation() {
  return (
    <div className="flex gap-3 items-center justify-end p-2 text-xl">
      <a
        href="/"
        className="opacity-50 p-2 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:opacity-100"
      >
        Strona Główna
      </a>
      <a
        href="/login"
        className="opacity-50 flex gap-2 items-center justify-end text-xl p-2 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:opacity-100"
      >
        {/* Zaloguj się <FaUserSlash /> */}
        Zaloguj się
      </a>
    </div>
  );
}
