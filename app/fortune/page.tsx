import FortuneButton from "../components/FortuneButton";

export default function FortunePage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Fortune cookie</h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        Clicking the button calls <code className="font-mono">/api/fortune</code>,
        a Route Handler that runs on the server and returns JSON.
      </p>
      <FortuneButton />
    </>
  );
}
