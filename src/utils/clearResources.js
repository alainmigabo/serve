import fs from "fs/promises";

const RESOURCES_PATH = new URL("../../resources.json", import.meta.url)
  .pathname;

export const clearResources = async () =>
  await fs.writeFile(RESOURCES_PATH, JSON.stringify({}, null, 2));
