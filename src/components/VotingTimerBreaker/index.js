import { withSuspense } from "../../utils/withSuspense";

export const VotingTimerBreaker = withSuspense(() =>
  import("./VotingTimerBreaker")
);
