import { withSuspense } from "../../../utils/withSuspense";

export const Winners = withSuspense(() => import("./Winners"));
