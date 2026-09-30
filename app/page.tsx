import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Hello, Next.js 👋</h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        This page is a Server Component. The counter below is a Client
        Component, so it can use state and handle clicks.
      </p>
      <Counter />
    </>
  );
}
