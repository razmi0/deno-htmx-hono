import pagesRoutes from "@pages/routes/pageRoutes.tsx";
import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";

const app = new Hono()
    .use(logger())
    /* routes for pages */
    .route("/", pagesRoutes)
    /* static files served at /public */
    .get(
        "/*",
        serveStatic({
            root: "./public",
        })
    );

Deno.serve({ port: 5050 }, app.fetch);
