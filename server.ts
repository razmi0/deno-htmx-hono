import pages from "@pages/routes.tsx";
import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";

const app = new Hono()
    .use(logger())
    /* routes for pages */
    .route("/", pages)
    /* static files served at /public */
    .get(
        "/*",
        serveStatic({
            root: ".client",
        })
    );

Deno.serve({ port: 5050 }, app.fetch);
