import readline from "readline/promises";

const line = readline.createInterface(process.stdin, process.stdout);

export const confirm = async (query) => {
  const response = await line.question(query);

  line.close();

  if (!["y", "Y", "n", "N"].includes(response)) throw Error("Invalid input");

  return /y|Y/g.test(response);
};
