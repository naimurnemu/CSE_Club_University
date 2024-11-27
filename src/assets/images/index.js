import { withSuspense } from "../../utils/withSuspense";

export const exampleExport = withSuspense(() => import("./example.png"));
export { default as LoginImage } from "./bg_login.jpg";
export { default as aboutImage } from "./about_in_login.jpg";


