import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Bubble from "./sorts/Bubble";
import Insertion from "./sorts/Insertion";
import Selection from "./sorts/Selection";



var router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/visualizer",
    element: <Home/>
  },
  {
    path: "/selection-sort",
    element: <Selection/>
  },
  {
    path: "/insertion-sort",
    element: <Insertion/>
  },
  {
    path: "/bubble-sort",
    element: <Bubble/>
  }
]);

export default router;
