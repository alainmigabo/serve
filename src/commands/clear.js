import { clearResources, confirm } from "../utils/index.js";

export const clear = async () => {
  try {
    const confirmed = await confirm(
      "Are you sure you want to delete all your resources? [y/n]: "
    );

    if (confirmed) {
      await clearResources();
      console.log("Cleared resources successfully!");
    }
  } catch (error) {
    if (error.message === "Invalid input") {
      console.log(error.message);

      return;
    }

    throw error;
  }
};
