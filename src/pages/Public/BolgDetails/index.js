import { withSuspense } from "../../../utils/withSuspense";

export const BlogDetails = withSuspense(() => import("./BlogDetails"));