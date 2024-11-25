import { withSuspense } from "../../../utils/withSuspense";

export const UserProfile = withSuspense(() => import("./UserProfile"));
