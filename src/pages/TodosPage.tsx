import { Header } from "@/components/Header.tsx";
import db from "@/db/index.ts";
import { getBodyFunction, parseFd } from "@/utils.ts";
import { DeleteIcon } from "@components/icons/DeleteIcon.tsx";
import { Container } from "@components/ui/Container.tsx";
import { Hono } from "hono";
import { logger } from "hono/logger";

type TodoRequest = {
    title: string;
    completed: "on" | undefined;
};

/* <form
                    class={"grid grid-cols-2 gap-2 justify-items-end text-left"}
                    hx-post="/todos"
                    hx-target="formTarget">
                    <AddTodo formTarget={formTarget} />
                </form> */

const Todo = ({ id, title, completed }: Todo) => {
    return (
        <form
            class={"flex items-center justify-between gap-3"}
            hx-put={`/todos/${id}`}
            hx-swap={"outerHTML"}
            hx-trigger={"change"}
            hx-on-htmx-before-request={getBodyFunction((event) => {
                console.log(event); // event is a htmx event
                console.log(this); // this is the form element
            })}>
            <input type="text" value={title} name="title" class="bg-transparent p-0" />
            <input type="checkbox" name="completed" checked={completed} />
            <button
                class="bg-transparent p-0"
                type="submit"
                hx-delete={`/todos/${id}`}
                hx-target="closest form"
                hx-swap="outerHTML:beforebegin">
                <DeleteIcon className="size-5" />
            </button>
        </form>
    );
};

export default new Hono()
    .basePath("/todos")
    .use(logger())
    /* POST todo */
    .put("/:id", async (c) => {
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

        return c.render(<Todo {...newTodo} />);
    })

    /* DELETE todo */
    .delete("/:id", async (c) => {
        const todos = await db.readTodos();
        if (!todos) throw new Error("Failed to read todos !");

        const id = parseInt(c.req.param("id"));

        const deleted = db.deleteTodo(id);
        if (!deleted) throw new Error("Failed to delete todo !");

        return new Response();
    });

export const TodosPage = async ({ bigTitle }: { bigTitle: string }) => {
    const todos = await db.readTodos();
    return (
        <>
            <Header />
            <main>
                <h1>{bigTitle}</h1>
                <Container>
                    {todos && todos.length > 0 ? todos.map((td) => <Todo {...td} />) : <>No todos found</>}
                </Container>
            </main>
            <footer></footer>
        </>
    );
};
