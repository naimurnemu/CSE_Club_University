import { withSuspense } from "../../../utils/withSuspense";

export const ErrorPage = withSuspense(() => import('./ErrorPage'));