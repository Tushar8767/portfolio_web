"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log isolated component fault safely
    console.error("System Fault Intercepted:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-control-bg text-control-text flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl border border-control-border bg-control-surface p-8 text-center shadow-panel space-y-4 font-mono">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amberwarn/30 bg-amberwarn/10 text-amberwarn mx-auto">
          <AlertTriangle className="h-6 w-6" />
        </div>

        <div className="space-y-1">
          <p className="text-xs text-amberwarn uppercase tracking-widest font-bold">
            FAULT INTERCEPTED // RECOVERABLE STATE
          </p>
          <h1 className="font-display text-2xl font-bold text-control-text">
            SUBSYSTEM EXCEPTION
          </h1>
        </div>

        <p className="font-sans text-xs text-control-textMuted leading-relaxed">
          An isolated runtime error occurred. The control boundary contained the fault to prevent host system instability.
        </p>

        <div className="flex items-center justify-center gap-3 pt-4 border-t border-control-border">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-lg border border-control-border bg-control-bg px-4 py-2 text-xs font-semibold text-control-text hover:border-control-borderHighlight transition"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Retry Operation</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-4 py-2 text-xs font-semibold text-cyanflux hover:bg-cyanflux/20 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Control Room</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
