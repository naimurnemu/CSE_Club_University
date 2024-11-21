import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage, LandingPage, NotFoundPage } from "../pages";
import { Register } from "../components";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",  
        element: <LandingPage />,  
      },
      {
        path: "/home",  
        element: <LandingPage />,
      },
      {
        path: "*",  
        element: <NotFoundPage />,  
      },
      {
        path: "/Register",
        element: <Register/>
      }
    ],
  },
])