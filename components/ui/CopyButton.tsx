"use client";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  }
  return (
    <button onClick={copy} className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-white/5" aria-live="polite">
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
