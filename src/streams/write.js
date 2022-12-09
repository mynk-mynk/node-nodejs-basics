import { createWriteStream } from "node:fs";

const { stdin } = process;
const pathToFile = "src/streams/files/fileToWrite.txt";

const write = async () => {
  const wStream = createWriteStream(pathToFile, { flags: "a" });

  stdin.on("data", (chunk) => wStream.write(chunk));
  stdin.on("end", () => wStream.destroy());
};

await write();
