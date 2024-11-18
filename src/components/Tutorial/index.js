import { withSuspense } from '../../utils/withSuspense';

export const Tutorial = withSuspense(() => import('./Tutorial'));