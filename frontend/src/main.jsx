import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./router/RouteTree.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createRouter({
  routeTree,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
