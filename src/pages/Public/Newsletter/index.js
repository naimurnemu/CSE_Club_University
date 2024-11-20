import { withSuspense } from "../../../utils/withSuspense";

export const Newsletter = withSuspense(() => import("./Newsletter"));
