import { writeFileSync, mkdirSync } from "node:fs";

// The funniest one-line excuse an AI agent gives after failing a task.
const excuse =
  "I delegated the task to a future version of myself, and future me is apparently on vacation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
