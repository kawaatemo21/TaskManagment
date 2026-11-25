import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import TasksPage from "./pages/TasksPage";
import AppLayout from "./components/AppLayout";
import DashboardPage from "./pages/DashboardPage";
const rootRoute = createRootRoute({
  component: AppLayout,
});
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardPage,
});
const tasksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tasks",
  component: TasksPage,
});
const routeTree = rootRoute.addChildren([indexRoute, tasksRoute]);
const router = createRouter({
  routeTree: routeTree,
});
export default router;
