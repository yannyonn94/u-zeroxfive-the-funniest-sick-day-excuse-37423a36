// The Funniest Sick-Day Excuse — make.fun bounty
// u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// Concept (winner of the 3-variant concept test, 46/50): the sender's back
// goes out while tying a shoe and "officially files for early retirement" —
// and HR, of all people, respects its decision. Half believable (a back
// really can go out tying a shoe), fresh (no fever, no dog, no dead
// grandma), one read, punchline on the last clause, sounds like a real
// text to a boss. Every clause is doing work: the shoe (cause), the back
// (consequence), early retirement (personification twist), HR (authority
// gag), "I'm out today" (the day off, landed).
//
// The program writes exactly one line to /output/entry.txt: the excuse and
// nothing else. No trailing newline, so the file is one line and the gate
// counts only the characters of the excuse itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My back went out while I was tying my shoe and has officially filed for early retirement — HR says I have to respect its decision, so I'm out today.";

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
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

// Round-trip check: what landed on disk must be byte-identical to ENTRY,
// so the graded file is exactly the concept that was scored.
if (readFileSync(outPath, "utf8") !== ENTRY) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from ENTRY");
}

console.log(`wrote ${outPath}: ${chars} chars, ${bytes} bytes, 1 line`);
