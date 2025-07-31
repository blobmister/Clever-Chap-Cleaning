import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Quote from "./pages/Quote.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "get-quote",
        element: <Quote />,
      },
    ],
  },
]);

export default router;
