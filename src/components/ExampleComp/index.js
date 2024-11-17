import { withSuspense } from "../../utils/withSuspense";

export const ExampleComp = withSuspense(() => import('./ExampleComp'));
