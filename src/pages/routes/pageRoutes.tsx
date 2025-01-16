import { CounterPage, counterRoutes } from "@pages/CounterPage.tsx";
import { HomePage } from "@pages/HomePage.tsx";
import { Layout } from "@pages/layout/Layout.tsx";
import todosRoutes from "@pages/TodosPage.tsx";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

export default new Hono()
    .route("/counter", counterRoutes)
    .route("/todos", todosRoutes)
    .get("/*", jsxRenderer())
    .get("/", (c) =>
        c.render(
            <Layout title="Home">
                <HomePage bigTitle="Home" />
            </Layout>
        )
    )
    .get("/counter", (c) =>
        c.render(
            <Layout title="Counter">
                <CounterPage bigTitle="Counter" />
            </Layout>
        )
    );
