import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { apiClient } from "./service/index.js";
import { setResource } from "./utils/index.js";
import { authenticate, clear } from "./commands/index.js";

yargs(hideBin(process.argv))
  .command(
    "init <baseURL>",
    "Initialize CLI by providing url to use while making requests",
    () => {},
    async ({ baseURL }) => {
      await setResource("baseURL", baseURL);
      console.log('Here')
    }
  )
  .command(
    "auth <credentials>",
    "Authenticate to access protected routes",
    () => {},
    authenticate
  )
  .command(
    "getall <path>",
    "Get all from a specified path",
    () => {},
    async ({ path }) => {
      const data = await apiClient.get(path);
      console.log(data);
    }
  )
  .command("clear", "Clear Resources", () => {}, clear)
  .demandCommand(1)
  .parse();
