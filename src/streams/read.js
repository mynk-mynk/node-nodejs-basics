import { createReadStream } from "node:fs";

const pathToFile = "src/streams/files/fileToRead.txt";

const read = async () => {
  const rStream = createReadStream(pathToFile);
  let data = "";
  rStream.on("data", (chunk) => (data += chunk));
  rStream.on("error", (err) => process.stdout.write(err.message));
  rStream.on("end", () => process.stdout.write(data + "\n"));
};

await read();
