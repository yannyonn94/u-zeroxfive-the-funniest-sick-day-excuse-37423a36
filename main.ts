// The Funniest Sick-Day Excuse — make.fun bounty
// u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// Concept (winner of the 3-variant concept test, 43/50): a sneeze so violent
// it throws the sender's back out, leaving them flat on the floor in a
// negotiation with their robot vacuum — and losing. Half believable (a sneeze
// really can throw a back out), fresh (no fever, no dog, no dead grandma),
// one read, punchline on the last two words, sounds like a real text.
//
// The program writes exactly one line to /output/entry.txt: the excuse and
// nothing else. No trailing newline, so the file is one line and the gate
// counts only the characters of the excuse itself.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "can't make it in — i sneezed so hard my back went out and now i'm flat on the floor negotiating with my roomba. it won.";

const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

const chars = [...ENTRY].length;
const bytes = Buffer.byteLength(ENTRY, "utf8");

// Gate self-check: the sealed scorer accepts only UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Fail loudly here
// instead of shipping an entry the gate would refuse.
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`wrote ${outPath}: ${chars} chars, ${bytes} bytes, 1 line`);
