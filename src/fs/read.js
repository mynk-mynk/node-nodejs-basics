import { readFile } from "fs/promises";

const path = "src/fs/files/";

const read = async () => {
  try {
    const data = await readFile(path + "fileToRead.txt");
    console.log(data.toString());
  } catch (err) {
    console.log("FS operation failed");
  }
};

await read();
