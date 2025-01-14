import { Header } from "@/components/Header.tsx";
import { Todos, TodosContainer } from "@components/Todo.tsx";
import { Hono } from "hono";
import { Fragment } from "hono/jsx";

const todos = [
    { id: 1, title: "Learn Hono", completed: false },
    { id: 2, title: "Learn Tailwind", completed: true },
    { id: 3, title: "Learn HTMX", completed: false },
    { id: 4, title: "Learn Deno", completed: true },
];

export default new Hono()
    /* POST todo */
    .post("/", async (c) => {
        const parsed = (await c.req.parseBody()) as Partial<Omit<Todos, "id">>;

        const id = todos.length + 1;
        const title = parsed.title || "blank";
        const completed = !!parsed.completed;
        todos.push({ id, title, completed });

        return c.render(<TodosContainer todos={todos} />);
    })
    .delete("/delete/:id", (c) => {
        const { id } = c.req.param();
        todos.splice(
            todos.findIndex((todo) => todo.id === parseInt(id)),
            1
        );
        return c.render(<TodosContainer todos={todos} />);
    })
    .put("/update/:id", async (c) => {
        const { id } = c.req.param();
        const parsed = (await c.req.parseBody()) as Partial<Omit<Todos, "id">>;

        const index = todos.findIndex((todo) => todo.id === parseInt(id));
        todos[index] = { ...todos[index], ...parsed };

        return c.render(<TodosContainer todos={todos} />);
    });

export const TodosPage = ({ bigTitle }: { bigTitle: string }) => {
    return (
        <Fragment>
            <Header />
            <main>
                <h1>{bigTitle}</h1>
                <TodosContainer todos={todos} />
            </main>
            <footer></footer>
        </Fragment>
    );
};
