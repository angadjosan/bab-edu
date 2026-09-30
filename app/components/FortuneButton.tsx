"use client";

import { useState } from "react";

type Fortune = { fortune: string; servedAt: string };

export default function FortuneButton() {
  const [data, setData] = useState<Fortune | null>(null);
  const [loading, setLoading] = useState(false);

  async function getFortune() {
    setLoading(true);
    const res = await fetch("/api/fortune");
    setData(await res.json());
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={getFortune}
        disabled={loading}
        className="rounded-full bg-foreground px-5 py-2 text-background transition-opacity hover:opacity-80 disabled:opacity-50"
      >
        {loading ? "Asking the server…" : "Get my fortune"}
      </button>
      {data && (
        <div className="max-w-md rounded-xl border border-black/10 p-5 dark:border-white/15">
          <p className="text-lg">🥠 {data.fortune}</p>
          <p className="mt-2 font-mono text-xs text-zinc-500">
            served at {data.servedAt}
          </p>
        </div>
      )}
    </div>
  );
}
