"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-6xl font-semibold tabular-nums">{count}</p>
      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-full bg-foreground px-5 py-2 text-background transition-opacity hover:opacity-80"
        >
          Click me
        </button>
        <button
          onClick={() => setCount(0)}
          className="rounded-full border border-black/15 px-5 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
