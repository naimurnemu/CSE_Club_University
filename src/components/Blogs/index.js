import { withSuspense } from '../../utils/withSuspense';

export const Blogs = withSuspense(() => import('./Blogs'));