"use client";

export default function Page() {
  return (
    <div className="p-24 flex flex-col gap-6 items-center">
      <h1 className="text-5xl opacity-50">Logowanie</h1>
      <form
        className="w-1/2 p-16 flex flex-col gap-8 items-center rounded-lg border border-neutral-700 bg-neutral-800/30"
        action="POST"
      >
        <div className="w-2/3 gap-4 flex items-center p-4">
          <label className="text-xl opacity-50" htmlFor="username">
            Login
          </label>
          <input
            className="h-10 w-2/3 rounded-lg border border-neutral-700 bg-neutral-800/30"
            type="text"
          />
        </div>
        <div className="w-2/3 gap-4 flex items-center p-4">
          <label className="text-xl opacity-50" htmlFor="password">
            Hasło
          </label>
          <input
            className="h-10 w-2/3 rounded-lg border border-neutral-700 bg-neutral-800/30"
            type="password"
          />
        </div>
        <div className="w-2/3 flex gap-4">
          <button
            className="w-1/2 text-center p-4 rounded-lg border border-neutral-700 bg-neutral-800/30 hover:bg-neutral-800/100"
            type="submit"
          >
            Zaloguj
          </button>
          <button className="w-1/2 text-center p-4 rounded-lg border border-neutral-700 bg-neutral-800/30  hover:bg-neutral-800/100">
            Zarejestruj
          </button>
        </div>
      </form>
    </div>
  );
}
