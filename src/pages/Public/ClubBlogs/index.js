import { withSuspense } from "../../../utils/withSuspense";

export const ClubBlogs = withSuspense(() => import("./ClubBlogs"));
