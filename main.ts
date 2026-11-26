// Midnight Fridge Roast — one-line entry for make.fun
// Writes a single roast line about a smart fridge that refuses
// to open after midnight to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// The roast: the fridge's petty midnight lockout is the target —
// the light still comes on to watch, but the door plays bouncer.
const LINE =
  "At 12:01 my fridge light comes on just to watch me beg through the glass — the door's a nightclub bouncer now: it knows my name, my order, and it still says no.";

// Gate: the scorer accepts UTF-8 text of 1..200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1..200 chars, got ${LINE.length}`);
}

function main(): void {
  const target = "/output/entry.txt";
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    console.log(`wrote ${LINE.length} chars to ${target}`);
  } catch {
    // Fallback for local runs where /output is not writable.
    writeFileSync("entry.txt", LINE, "utf8");
    console.log(`wrote ${LINE.length} chars to ./entry.txt (fallback)`);
  }
}

main();
