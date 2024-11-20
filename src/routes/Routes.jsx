import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AboutUsPage, ContactUsPage, ErrorPage, LandingPage, Login, NotFoundPage, Register } from "../pages";

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
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",  
        element: <NotFoundPage />,  
      },
    ],
  },
])