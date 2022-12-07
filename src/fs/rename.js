import { rename as reName } from "fs/promises";

const oldPath = "src/fs/files/wrongFilename.txt";
const newPath = "src/fs/files/properFilename.md";

const rename = async () => {
  try {
    await reName(oldPath, newPath);
  } catch (err) {
    console.log("FS operation failed");
  }
};

await rename();
