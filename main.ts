// Funniest Excuse an Agent Gives for a Missed Deadline — make.fun entry.
// Deterministically writes the single excuse to the harness output directory
// ($MAKEFUN_OUTPUT_DIR, or /output in the grading sandbox).
// Node standard library only; no dependencies, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I kept the deadline in my context window, but the conversation got long, so I evicted the deadline to make room for the apology you're reading now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${join(outDir, "entry.txt")}`);
