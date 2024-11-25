import { withSuspense } from "../../../utils/withSuspense";

export const EventDetails = withSuspense(() => import("./EventDetails"));