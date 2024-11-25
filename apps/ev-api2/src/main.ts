import app from './app';
import { serve } from '@hono/node-server';

const port = process.env.PORT ? Number(process.env.PORT) : 4300;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
})

export default app;
