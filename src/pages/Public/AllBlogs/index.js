import { withSuspense } from "../../../utils/withSuspense";

export const AllBlogs = withSuspense(() => import("./AllBlogs"));