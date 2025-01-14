import Counter from "@components/Counter.tsx";
import { Header } from "@components/Header.tsx";
import { Hono } from "hono";
import { Fragment } from "hono/jsx";

/* base path : /counter */
export const counterRoutes = new Hono();

counterRoutes.get(":add", (c) => {
    const add = parseInt(c.req.param("add"));
    return c.render(<Counter add={add} hxPath="counter" id="counter" />);
});

export const CounterPage = ({ bigTitle }: { bigTitle: string }) => {
    return (
        <Fragment>
            <Header />
            <main>
                <h1>{bigTitle}</h1>
                <p>
                    This counter is implemented using htmx. A click call a endpoint to the server with the add value (1
                    or -1) and return server side JSX rendered HTML replacing the counter with the updated value. The
                    state of the counter is holded on the server.
                </p>
                <Counter id="counter" hxPath="counter" />
            </main>
            <footer></footer>
        </Fragment>
    );
};
