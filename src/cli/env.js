const parseEnv = () => {
  const rssVars = Object.keys(process.env).filter((key) =>
    key.startsWith("RSS_")
  );
  rssVars.forEach((item) => console.log(item + "=" + process.env[item]));
};

parseEnv();
