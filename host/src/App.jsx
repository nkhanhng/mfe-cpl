import { Suspense } from "react";
import "./App.css";
import Home from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RemoteApp from "remoteApp/App";
import EarnApp from "earnApp/App";
import TradingApp from "tradingApp/App";
import ForexApp from "forexApp/App";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/apps/remote",
    element: (
      <Suspense>
        <RemoteApp />
      </Suspense>
    ),
  },
  {
    path: "/apps/earn",
    element: (
      <Suspense>
        <EarnApp />
      </Suspense>
    ),
  },
  {
    path: "/apps/trading",
    element: (
      <Suspense>
        <TradingApp />
      </Suspense>
    ),
  },
  {
    path: "/apps/forex",
    element: (
      <Suspense>
        <ForexApp />
      </Suspense>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
