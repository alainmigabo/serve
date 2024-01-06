import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  authenticate,
  clear,
  getAll,
  getById,
  initialize,
} from "./commands/index.js";

yargs(hideBin(process.argv))
  .command(
    "init <baseURL>",
    "Initialize CLI by providing url to use while making requests",
    () => {},
    initialize
  )
  .command(
    "auth <credentials>",
    "Authenticate to access protected routes",
    () => {},
    authenticate
  )
  .command("getall <path>", "Get all from a specified path", () => {}, getAll)
  .command(
    "getone <path> <id>",
    "Get one by the specified Id",
    () => {},
    getById
  )
  .command("clear", "Clear Resources", () => {}, clear)
  .demandCommand(1)
  .parse();
