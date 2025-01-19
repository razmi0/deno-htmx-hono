import { Container } from "../components/Todos/Container.tsx";
import counterRoutes from "@pages/CounterPage.tsx";
import { Layout } from "@pages/Layout.tsx";
import todosRoutes from "@pages/TodosPage.tsx";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Header } from "../components/Header.tsx";

/**
 * application routes
 */
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
                    <Sortables />
                </main>
            </Layout>
        )
    )
    .post("/items", async (c) => {
        const data = await c.req.formData();
        const items = data.getAll("items[]") as string[];
        return c.render(<Sortables items={items} />);
    })
    .route("/counter", counterRoutes)
    .route("/todos", todosRoutes);

const Sortables = ({ items }: { items?: string[] }) => {
    return (
        <form class="sortable" hx-post="/items" hx-trigger="end" hx-swap="outerHTML">
            <div class="htmx-indicator">Updating...</div>
            {(items || ["1", "2", "3"]).map((value: string) => {
                return (
                    <Container>
                        <input type="hidden" name="items[]" value={value} />
                        Item {value}
                    </Container>
                );
            })}
        </form>
    );
};
