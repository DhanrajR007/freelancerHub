import { createRootRoute, createRoute } from "@tanstack/react-router";
import App from "../App";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import About from "../pages/About";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import CreateClient from "../pages/CreateClient";
import CreateInvoice from "../pages/CreateInvoice";
import CreateContract from "../pages/CreateContract";
import ClientDetails from "../pages/ClientDetails";
import Dashboard from "../pages/Dashboard";
import Contracts from "../pages/Contracts";
import Invoices from "../pages/Invoices";
import { checkAuth } from "../utils/helper";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth",
  component: Auth,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "about",
  component: About,
});

const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "features",
  component: Features,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "pricing",
  component: Pricing,
});

const createClientRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "create-client",
  component: CreateClient,
  beforeLoad: checkAuth,
});

const createInvoiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "create-invoice",
  component: CreateInvoice,
  beforeLoad: checkAuth,
});

const createContractRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "create-contract",
  component: CreateContract,
  beforeLoad: checkAuth,
});

const clientDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "client-details",
  component: ClientDetails,
  beforeLoad: checkAuth,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: Dashboard,
  beforeLoad: checkAuth,
});

const contractsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "contracts",
  component: Contracts,
  beforeLoad: checkAuth,
});

const invoicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "invoices",
  component: Invoices,
  beforeLoad: checkAuth,
});

// const postsRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "posts",
// });

export const routeTree = rootRoute.addChildren([
  indexRoute,
  authRoute,
  aboutRoute,
  featuresRoute,
  pricingRoute,
  createClientRoute,
  createInvoiceRoute,
  createContractRoute,
  clientDetailsRoute,
  dashboardRoute,

  contractsRoute,
  invoicesRoute,
  // postsRoute,
]);
