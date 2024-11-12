import { lazy } from "react";
import { withSuspense } from "../../utils/withSuspense";

export const ExampleComp = withSuspense(lazy(() => import("./ExampleComp")));