import { rm } from "fs/promises";

const path = "src/fs/files/";

const remove = async () => {
  try {
    await rm(path + 'fileToRemove.txt');
  } catch (err) {
    console.log("FS operation failed");
  }
};

await remove();
