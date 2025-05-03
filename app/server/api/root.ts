import { createTRPCRouter } from './trpc';
import { userRouter } from './routers/user';
import { progressRouter } from './routers/progress';
import { astroRouter } from './routers/astro';
import { communityRouter } from './routers/community';
import { resourceRouter } from './routers/resource';
import { goalRouter } from './routers/goal';

export const appRouter = createTRPCRouter({
    user: userRouter,
    progress: progressRouter,
    astro: astroRouter,
    community: communityRouter,
    resource: resourceRouter,
    goal: goalRouter,
});

export type AppRouter = typeof appRouter; 