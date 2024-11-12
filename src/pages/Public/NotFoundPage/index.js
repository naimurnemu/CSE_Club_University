import { lazy } from "react";
import { withSuspense } from "../../../utils/withSuspense";

export const NotFoundPage = withSuspense(lazy(() => import("./NotFoundPage")));