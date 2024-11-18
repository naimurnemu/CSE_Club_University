import { withSuspense } from '../../utils/withSuspense';

export const Team = withSuspense(() => import('./Team'));