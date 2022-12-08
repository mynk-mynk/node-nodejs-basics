import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const pathToFile = "src/hash/files/";

const calculateHash = async () => {
  const fileBuffer = await readFile(pathToFile + "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  
  hash.update(fileBuffer);
  
  const hex = hash.digest("hex");
  console.log(hex);
};

await calculateHash();
