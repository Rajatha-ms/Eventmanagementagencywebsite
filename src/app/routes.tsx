import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UpcomingEvents from "./pages/UpcomingEvents";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import GetInTouch from "./pages/GetInTouch";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "upcoming-events", Component: UpcomingEvents },
      { path: "about", Component: AboutUs },
      { path: "services", Component: OurServices },
      { path: "contact", Component: GetInTouch },
    ],
  },
]);
