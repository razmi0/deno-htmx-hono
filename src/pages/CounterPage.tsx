import Counter from "@components/Counter.tsx";
import { Header } from "../components/Header.tsx";
import { Layout } from "@pages/Layout.tsx";
import { Hono } from "hono";

/* base path : /counter */
export default new Hono()
    .get("/", (c) =>
        c.render(
            <Layout title="Counter">
                <Header />
                <main>
                    <h1>Counter</h1>
                    <p>
                        This counter is implemented using htmx. A click call a endpoint to the server with the add value
                        (1 or -1) and return server side JSX rendered HTML replacing the counter with the updated value.
                        The state of the counter is holded on the server.
                    </p>
                    <Counter id="counter" hxPath="counter" />
                </main>
            </Layout>
        )
    )
    .get(":add", (c) => {
        const add = parseInt(c.req.param("add"));
        return c.render(<Counter add={add} hxPath="counter" id="counter" />);
    });
