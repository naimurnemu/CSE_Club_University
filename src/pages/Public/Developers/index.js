import { withSuspense } from "../../../utils/withSuspense";

export const Developers = withSuspense(() => import("./Developers"));
