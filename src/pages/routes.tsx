import { Header } from "../components/ui/Header.tsx";
import counterRoutes from "@pages/CounterPage.tsx";
import todosRoutes from "@pages/TodosPage.tsx";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "@pages/Layout.tsx";

export default new Hono()
    .use(
        "*",
        jsxRenderer(({ children }) => <html>{children}</html>, { docType: "<!DOCTYPE html>" })
    )
    .get("/", (c) =>
        c.render(
            <Layout title="Home">
                <Header />
                <main>
                    <h1>Home</h1>
                </main>
            </Layout>
        )
    )
    .route("/counter", counterRoutes)
    .route("/todos", todosRoutes);
