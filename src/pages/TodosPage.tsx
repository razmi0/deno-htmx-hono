import db from "@/db/index.ts";
import { parseFd } from "@/utils.ts";
import { Header } from "@components/Header.tsx";
import { AddTodo, Todo, Todolist } from "@components/Todos/Todo.tsx";
import { Layout } from "@pages/Layout.tsx";
import { Hono } from "hono";
import { logger } from "hono/logger";

type TodoKey = `todo-${number}` | `title-${number}` | `completed-${number}`;

type UpdateTodoData = {
    [key in TodoKey]: string | "on" | undefined;
};

type AddTodoData = {
    title: string;
    completed: string;
};

const Main = ({ children }: { children: any }) => {
    return (
        <main>
            <h1>Todos</h1>
            {children}
        </main>
    );
};

const fromForm = (data: UpdateTodoData): Todo[] => {
    return Object.entries(data).reduce((result: Todo[], [key, value]) => {
        const match = key.match(/(todo|title|completed)-(\d+)/);
        if (!match) return result;

        const [, field, id] = match;

        // Find the existing todo by ID, or create a new one
        let todo = result.find((item) => item.id === id);
        if (!todo) {
            todo = { id, title: "", completed: false };
            result.push(todo); // Add to the result array to maintain order
        }

        // Update the fields based on the key
        if (field === "title") {
            todo.title = value as string;
        } else if (field === "completed") {
            todo.completed = value === "on";
        }

        return result;
    }, [] as Todo[]);
};

export default new Hono()
    .use(logger())
    /* GET todos page */
    .get("/", async (c) => {
        const todos = await db.readTodos();
        return c.render(
            <Layout title="Todos">
                <Header />
                <Main>
                    {todos ? <Todolist todos={todos} /> : <>No todos found</>}
                    <AddTodo />
                </Main>
            </Layout>
        );
    })
    /* post todo */
    .post("/", async (c) => {
        const { title, completed } = await parseFd<AddTodoData>(c);
        const newTodo = {
            title,
            completed: !!completed,
        };
        const id = await db.createTodo(newTodo);
        if (!id) throw new Error("Failed to create todo !");
        return c.render(<Todo {...newTodo} id={id} />);
    })
    /* update todos (input change and sorting events) */
    .put("/", async (c) => {
        const data = await parseFd<UpdateTodoData>(c);
        const todos = fromForm(data);
        const updated = await db.updateAllTodos(todos);
        if (!updated) throw new Error("Failed to update todos !");
        return c.render(<Todolist todos={updated} />);
    })

    /* DELETE todo */
    .delete("/:id", async (c) => {
        const todos = await db.readTodos();
        if (!todos) throw new Error("Failed to read todos !");
        const id = c.req.param("id");
        console.log("Deleting todo with id: ", id);
        const updated = await db.deleteTodo(id);
        if (!updated) throw new Error("Failed to delete todo !");
        return c.render(<Todolist todos={updated} />);
    });
