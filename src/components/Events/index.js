import { withSuspense } from '../../utils/withSuspense';

export const Events = withSuspense(() => import('./Events'));