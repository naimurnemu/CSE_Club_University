import { withSuspense } from "../../../utils/withSuspense";

export const CookiePolicy = withSuspense(() => import("./CookiePolicy"));
