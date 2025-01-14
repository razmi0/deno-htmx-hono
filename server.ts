import pagesRoutes from "@pages/routes/pageRoutes.tsx";
import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";

const app = new Hono().use(logger());
app.route("/", pagesRoutes);

/* static files served at /public */
app.get(
    "/*",
    serveStatic({
        root: "./public",
    })
);

Deno.serve({ port: 5050 }, app.fetch);
