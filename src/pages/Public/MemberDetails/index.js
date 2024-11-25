import { withSuspense } from '../../../utils/withSuspense';

export const MemberDetails = withSuspense(() => import('./MemberDetails'));