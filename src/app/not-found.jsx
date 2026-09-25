"use client";

import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-control-bg text-control-text flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl border border-control-border bg-control-surface p-8 text-center shadow-panel space-y-4 font-mono">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-crimsonalert/30 bg-crimsonalert/10 text-crimsonalert mx-auto">
          <Terminal className="h-6 w-6" />
        </div>

        <div className="space-y-1">
          <p className="text-xs text-crimsonalert uppercase tracking-widest font-bold">
            ERROR 404 // ROUTE NOT FOUND
          </p>
          <h1 className="font-display text-2xl font-bold text-control-text">
            SYSTEM ADDRESS UNREACHABLE
          </h1>
        </div>

        <p className="font-sans text-xs text-control-textMuted leading-relaxed">
          The requested system node does not exist in the active Engineering Control Room registry.
        </p>

        <div className="pt-4 border-t border-control-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-cyanflux/40 bg-cyanflux/10 px-4 py-2 text-xs font-semibold text-cyanflux hover:bg-cyanflux/20 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Control Room</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
