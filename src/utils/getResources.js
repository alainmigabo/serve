import fs from "fs/promises";

const RESOURCES_PATH = new URL("../../resources.json", import.meta.url)
  .pathname;

export const getResources = async () =>
  JSON.parse(await fs.readFile(RESOURCES_PATH, "utf-8"));

export const getResource = async (resource) => (await getResources())[resource];
