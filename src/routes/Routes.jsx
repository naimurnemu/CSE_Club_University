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
  // Sponsorship,
  Chat,
  Vote,
  ExecutiveBody,
  BlogDetails,
  UserProfile,
  AllEvents,
  EventDetails,
  MemberDetails,
  CookiePolicy,
  PrivacyPolicy,
  TermsAndServices,
  Developers,
  Winners,
  AllBlogs,
  Activities,
} from "../pages";
import { Blogs } from "../components";
import { FAQ } from "../pages/Public/FAQ";

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
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/cookie",
        element: <CookiePolicy />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-services",
        element: <TermsAndServices />,
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
        path: "/edit-profile",
        element: <UserProfile />,
      },
      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "/winner",
        element: <Winners />,
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
        path: "/events",
        element: <AllEvents />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
      {
        path: "/membership/:id",
        element: <MemberDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />
      },
      {
        path: "/faqs",
        element: <FAQ />
      }
    ],
  },
]);
