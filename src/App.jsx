import "./App.css";
import { AppLayout } from "./components/Layouts/AppLayout";
import CountryDetails from "./components/Layouts/CountryDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path: "/country/:id",
        element: <CountryDetails />
      }
    ]
  }

]);
export const App = () => {
  return <RouterProvider router={routes} />
}

export default App;