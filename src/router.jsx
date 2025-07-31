import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Quote from "./pages/Quote.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/get-quote",
        element: <Quote />
    }
]);

export default router;