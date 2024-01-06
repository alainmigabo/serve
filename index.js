#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  authenticate,
  clear,
  create,
  getAll,
  getById,
  initialize,
  remove,
  update,
} from "./src/commands/index.js";

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
  .command(
    "create <path> <data>",
    "Provide data to create new element",
    () => {},
    create
  )
  .command(
    "update <path> <id> <data>",
    "Update data with the specified id",
    () => {},
    update
  )
  .command(
    "delete <path> <id>",
    "Delete element with provided id",
    () => {},
    remove
  )
  .command("clear", "Clear Resources", () => {}, clear)
  .demandCommand(1)
  .parse();
