import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../root';
import { createTRPCContext } from '../../trpc';

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => createTRPCContext({ req }),
    });

export { handler as GET, handler as POST }; 