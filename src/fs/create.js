import { appendFile, open } from "fs/promises";

const path = "src/fs/files/";

const appendFile = async () => {
  try {
    await appendFile(path + "fresh.txt", "I am fresh and young");
  } catch (err) {
    console.log("FS operation failed");
  }
};

const create = async () => {
  try {
    await open(path + "fresh.txt");
    console.log("FS operation failed");
  } catch (err) {
    await appendFile();
  }
};

await create();
