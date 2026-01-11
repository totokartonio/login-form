import { ERRORS } from "../data";

const mockAuth = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email === "error@test.com" || password === "wrong") {
    throw new Error(ERRORS.wrongCredentials);
  }

  if (email === "inactive@test.com") {
    throw new Error(ERRORS.inactiveUser);
  }

  return {
    token: "mock_token_" + crypto.randomUUID(),
    user: {
      email,
      id: crypto.randomUUID(),
    },
  };
};

export { mockAuth };
