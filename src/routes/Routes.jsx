import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  AboutUsPage,
  ContactUsPage,
  ErrorPage,
  LandingPage,
  Login,
  NotFoundPage,
  Register,
  Announcements,
  Alumni,
  ClubBlogs,
  Newsletter,
  Sponsorship,
  Chat,
  Vote,
  ExecutiveBody,
  BlogDetails,
} from "../pages";

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
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/vote",
        element: <Vote />,
      },
      {
        path: "/executives",
        element: <ExecutiveBody />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails />
      },
    ],
  },
]);
