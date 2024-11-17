import { withSuspense } from "../../utils/withSuspense";

export const exampleExport = withSuspense(() => import("./example.png"));