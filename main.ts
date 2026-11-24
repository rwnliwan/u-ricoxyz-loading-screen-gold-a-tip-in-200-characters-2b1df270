import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tip: your agent finished five minutes ago. The bar is still going so you feel involved.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
