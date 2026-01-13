import { ERRORS } from "../data";

const mockReset = async (email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email === "error@test.com") {
    throw new Error(ERRORS.wrongEmail);
  }

  if (email === "inactive@test.com") {
    throw new Error(ERRORS.inactiveUser);
  }

  return {
    success: true,
    message: "If an account exists, a reset email has been sent.",
  };
};

export { mockReset };
