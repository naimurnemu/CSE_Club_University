import { withSuspense } from "../../../utils/withSuspense";

export const Chat = withSuspense(() => import("./Chat"));
