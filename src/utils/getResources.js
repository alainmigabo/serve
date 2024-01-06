import fs from "fs/promises";

const RESOURCES_PATH = new URL("../../resources.json", import.meta.url)
  .pathname;

export const getResources = async () => {
  const file = await fs.readFile(RESOURCES_PATH, "utf-8");

  return JSON.parse(file);
};

export const getResource = async (resource) => {
  const resources = await getResources();

  return resources[resource];
};
