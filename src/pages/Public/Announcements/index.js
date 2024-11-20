import { withSuspense } from "../../../utils/withSuspense";

export const Announcements = withSuspense(() => import("./Announcements"));
