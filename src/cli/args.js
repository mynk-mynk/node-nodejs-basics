const parseArgs = () => {
  const filtredArgs = process.argv.slice(2);
  filtredArgs.forEach((arg, i, arr) => {
    if (i % 2 === 0) {
      console.log(arg.slice(2), "is", arr[i + 1]);
    }
  });
};

parseArgs();
