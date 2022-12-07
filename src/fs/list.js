import { readdir } from "fs/promises";

const path = "src/fs/files/";

const list = async () => {
  try {
    const files = await readdir(path);
    console.log(files);
  } catch (err) {
    console.log("FS operation failed");
  }
};

await list();
