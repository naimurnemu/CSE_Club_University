import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AboutUsPage, ContactUsPage, ErrorPage, LandingPage, Login, NotFoundPage, Register, Announcements, Alumni, ClubBlogs, Newsletter, Sponsorship } from "../pages";

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
        path: "/announcements",
        element: <Announcements />,
      },
      {
        path: "/alumni",
        element: <Alumni />,
      },
      {
        path: "/club-blogs",
        element: <ClubBlogs />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
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