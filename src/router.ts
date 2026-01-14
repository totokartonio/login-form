import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import type { AuthContextType } from "./types";

export interface MyRouterContext {
  auth: AuthContextType;
}

export const router = createRouter({
  routeTree,
  context: { auth: undefined! },
  basepath: import.meta.env.BASE_URL,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
