import { withSuspense } from "../../../utils/withSuspense";

export const Activities = withSuspense(() => import("./Activities"));
