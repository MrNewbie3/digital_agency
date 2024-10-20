import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/home";
import About from "./pages/about";
import SocialMediaLayouts from "./layouts/socialMedia";
import WebDevelopmentLayouts from "./layouts/webDev";
import NotFound from "./pages/notFound";
import ComingSoon from "./pages/coomingSoon";
import WebFeaturesLayout from "./layouts/webFeatures";
import GetInTouch from "./pages/getInTouch";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "about", element: <About /> },
    { path: "social-media", element: <SocialMediaLayouts /> },
    {
      path: "web-development",
      element: <WebDevelopmentLayouts />,
    },
    {
      path: "web-development/landing-page",
      element: <WebFeaturesLayout />, // Child route, renders independently
    },
    {
      path: "web-development/company-profile",
      element: <WebFeaturesLayout />, // Child route, renders independently
    },
    {
      path: "web-development/advanced-development",
      element: <WebFeaturesLayout />, // Child route, renders independently
    },
    { path: "get-in-touch", element: <GetInTouch /> },
    { path: "coming-soon", element: <ComingSoon /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
