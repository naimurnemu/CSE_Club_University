import { lazy } from "react";
import { withSuspense } from "../../../utils/withSuspense";

export const ErrorPage = withSuspense(lazy(() => import("./ErrorPage")));