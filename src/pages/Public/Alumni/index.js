import { withSuspense } from "../../../utils/withSuspense";

export const Alumni = withSuspense(() => import("./Alumni"));
