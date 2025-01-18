import db from "@/db/index.ts";
import { getBodyFunction, parseFd } from "@/utils.ts";
import { Checkbox } from "@components/ui/Checkbox.tsx";
import { Container as Card } from "@components/ui/Container.tsx";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { Header } from "../components/ui/Header.tsx";
import { DeleteIcon, PlusIcon } from "../components/ui/Icons.tsx";
import { Layout } from "./Layout.tsx";

type TodoKey = `todo-${number}` | `title-${number}` | `completed-${number}`;

type TodoRequest = {
    [key in TodoKey]: string | "on" | undefined;
};

type AddTodoRequest = {
    title: string;
    completed: string;
};

const AddTodo = () => {
    return (
        <Card className="mt-5">
            <form
                class="flex items-center justify-between gap-3"
                hx-post="/todos"
                hx-swap="outerHTML"
                hx-target={"output#added"}>
                <input type="text" placeholder="Add todo.." class="bg-transparent p-0 w-[40ch]" name="title" />
                <Checkbox />
                <button class="bg-transparent p-0" type="submit">
                    <PlusIcon className="size-5" />
                </button>
            </form>
        </Card>
    );
};

const Todo = ({ id, title, completed }: Todo) => {
    /* Executed in client side
     * "event" is a custom Event(htmx event)
     * "this" is the form element */
    const onBeforeRequest = getBodyFunction((event: Event) => {
        console.log(event);
        this as unknown as HTMLElement;
        console.log(this);
    });

    return (
        <Card id={`todo-${id}`}>
            <div class="flex items-center justify-between gap-3">
                <input type="text" class={"hidden"} name={`todo-${id}`} value={id} />
                <input type="text" value={title} name={`title-${id}`} class="bg-transparent p-0 w-[40ch]" />
                <Checkbox checked={completed} name={`completed-${id}`} />
                <button
                    class="bg-transparent p-0"
                    hx-delete={`/todos/${id}`}
                    hx-target={`#todo-${id}`}
                    hx-swap="outerHTML">
                    <DeleteIcon className="size-5" />
                </button>
            </div>
        </Card>
    );
};

const Todolist = ({ todos }: { todos: Todo[] }) => {
    return (
        <form class="sortable" hx-put="/todos" hx-swap="outerHTML" hx-trigger={"change, keydown[Enter]"}>
            {todos.map((td) => (
                <Todo {...td} />
            ))}
            <output id="added" class={"hidden"}></output>
        </form>
    );
};

export default new Hono()
    .use(logger())
    /* GET todos page */
    .get("/", async (c) => {
        const todos = await db.readTodos();
        return c.render(
            <Layout title="Todos">
                <Header />
                <main>
                    <h1>Todos</h1>
                    {todos && todos.length > 0 ? <Todolist todos={todos} /> : <>No todos found</>}
                    <AddTodo />
                </main>
            </Layout>
        );
    })
    /* post todo */
    .post("/", async (c) => {
        console.log(await c.req.formData());
        const { title, completed } = await parseFd<AddTodoRequest>(c);
        const newTodo = {
            title,
            completed: !!completed,
        };

        const id = await db.createTodo(newTodo);
        if (!id) throw new Error("Failed to create todo !");

        return c.render(
            <>
                <Todo {...newTodo} id={id} />
                <output id="added" class={"hidden"}></output>
            </>
        );
    })
    /* update todos (input change and sorting events) */
    .put("/", async (c) => {
        const data = await parseFd<TodoRequest>(c);
        const groupedTodos = Object.entries(data).reduce((result, [key, value]) => {
            const match = key.match(/(todo|title|completed)-(\d+)/);
            if (!match) return result;

            const [, field, id] = match;
            if (!result[id]) {
                result[id] = { id, title: "", completed: false };
            }

            if (field === "title") {
                result[id].title = value;
            } else if (field === "completed") {
                result[id].completed = true;
            }

            return result;
        }, {});

        const todos = Object.values(groupedTodos) as Todo[];
        const updated = await db.updateAllTodos(todos);
        if (!updated) throw new Error("Failed to update todos !");

        return c.render(<Todolist todos={updated} />);
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
