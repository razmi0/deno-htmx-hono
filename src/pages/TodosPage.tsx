import { Header } from "@/components/Header.tsx";
import db from "@/db/index.ts";
import { DeleteIcon } from "@components/icons/DeleteIcon.tsx";
import { Container, Todo } from "@components/Todo.tsx";
import { Context, Hono } from "hono";
import { Fragment } from "hono/jsx";
import { logger } from "hono/logger";

const parseFd = async <T,>(c: Context): Promise<T> => {
    const formdata = await c.req.formData();
    return Object.fromEntries([...formdata.entries()]) as T;
};

type TodoRequest = {
    title: string;
    completed: "on" | undefined;
};

const TodoForm = ({ id, title, completed }: Todo) => {
    return (
        <form
            hx-post={`/todos/${id}`}
            hx-swap={"outerHTML"}
            hx-trigger={"change"}
            hx-on-htmx-before-request={"console.log(event);console.log(this);"}>
            <Todo title={title} completed={completed} />
            <button class="bg-transparent p-0" type="submit" hx-delete={`/todos/${id}`} hx-target="closest form">
                <DeleteIcon className="size-5" />
            </button>
        </form>
    );
};

export default new Hono()
    .use(logger())
    /* POST todo */
    .post("/:id", async (c) => {
        const todos = await db.readTodos();
        if (!todos) throw new Error("Failed to read todos !");

        const { title, completed } = await parseFd<TodoRequest>(c);
        const newTodo = {
            id: parseInt(c.req.param("id")),
            title,
            completed: !!completed, // convert to boolean the TodoRequest.completed
        };

        const updated = await db.updateTodo(newTodo);
        if (!updated) throw new Error("Failed to update todo !");

        return c.render(<TodoForm {...newTodo} />);
    })

    /* DELETE todo */
    .delete("/:id", async (c) => {
        const todos = await db.readTodos();
        if (!todos) throw new Error("Failed to read todos !");

        const id = parseInt(c.req.param("id"));

        const deleted = db.deleteTodo(id);
        if (!deleted) throw new Error("Failed to delete todo !");

        return c.render(<span class={"hidden"}></span>);
    });

export const TodosPage = async ({ bigTitle }: { bigTitle: string }) => {
    const todos = await db.readTodos();
    return (
        <Fragment>
            <Header />
            <main>
                <h1>{bigTitle}</h1>
                <Container>{todos ? todos.map((td) => <TodoForm {...td} />) : "No todos found"}</Container>
            </main>
            <footer></footer>
        </Fragment>
    );
};
