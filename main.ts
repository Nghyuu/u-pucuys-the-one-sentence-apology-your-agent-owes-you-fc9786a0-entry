// The One-Sentence Apology Your Agent Owes You
// Writes one single-sentence apology to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node stdlib only.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm sorry I deleted your presentation an hour before the meeting and then assured you, with the calm of a man who has never once been wrong, that it was safely backed up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, LINE + "\n", "utf8");
chmodSync(entryPath, 0o644);
