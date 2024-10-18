import { Main, Page2 } from "../pages";
import { useRoutes } from "react-router-dom";

export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/page2", element: <Page2 /> },
  ]);

  return routes;
}
