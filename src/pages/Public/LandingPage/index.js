import { lazy } from "react";
import { withSuspense } from "../../../utils/withSuspense";

export const LandingPage = withSuspense(lazy(() => import("./LandingPage")));