import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

function reverseString(str) {
  return str.split("").reverse().join("");
}

const { stdin, stdout } = process;

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      callback(null, reverseString(chunk.toString()));
    },
  });
  await pipeline(stdin, reverseStream, stdout);
};

await transform();
