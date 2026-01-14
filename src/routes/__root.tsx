import { createRootRouteWithContext } from "@tanstack/react-router";
import type { AuthContextType } from "../types";
import App from "../App";

interface MyRouterContext {
  auth: AuthContextType;
}

// Use the routerContext to create your root route
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: App,
});
