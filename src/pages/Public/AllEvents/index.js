import { withSuspense } from "../../../utils/withSuspense";

export const AllEvents = withSuspense(() => import("./AllEvents"));