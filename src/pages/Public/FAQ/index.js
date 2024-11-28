import { withSuspense } from "../../../utils/withSuspense";

export const FAQ = withSuspense(() => import("./FAQ"));