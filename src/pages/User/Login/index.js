import { withSuspense } from "../../../utils/withSuspense";

export const Login = withSuspense(() => import("./Login"));
