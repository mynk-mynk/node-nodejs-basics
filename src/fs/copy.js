import { cp } from "fs/promises";

const srcPath = "src/fs/files";
const destPath = "src/fs/files_copy";

const copy = async () => {
  try {
    await cp(srcPath, destPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    console.log("FS operation failed");
  }
};

await copy();
