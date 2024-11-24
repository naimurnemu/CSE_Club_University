import { withSuspense } from "../../../utils/withSuspense";

export const Vote = withSuspense(() => import("./Vote"));
