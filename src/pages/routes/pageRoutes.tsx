import { CounterPage, counterRoutes } from "@pages/CounterPage.tsx";
import { HomePage } from "@pages/HomePage.tsx";
import { Layout } from "@pages/layout/Layout.tsx";
import todosRoutes, { TodosPage } from "@pages/TodosPage.tsx";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

const Home = () => (
    <Layout title="Home">
        <HomePage bigTitle="Home" />
    </Layout>
);

const Counter = () => (
    <Layout title="Counter">
        <CounterPage bigTitle="Counter" />
    </Layout>
);

const Todos = () => (
    <Layout title="Todos">
        <TodosPage bigTitle="Todos" />
    </Layout>
);

export default new Hono()
    .route("/counter", counterRoutes)
    .route("/todos", todosRoutes)
    .get("/*", jsxRenderer())
    .get("/", (c) => c.render(<Home />))
    .get("/counter", (c) => c.render(<Counter />))
    .get("/todos", (c) => c.render(<Todos />));
