import db from "@/db/index.ts";
import { Todo } from "@components/Todo.tsx";

const askReset = Deno.args[0] === "--reset";
const limit = Deno.args[1] ? parseInt(Deno.args[1]) : 10;

if (askReset) {
    const todos = await db.readTodos();
    if (!todos) throw new Error("[RESETING] : Failed to read todos in migration !");
    const ids = todos.map((todo) => todo.id);
    for (const id of ids) {
        const newTodos = await db.deleteTodo(id);
        if (!newTodos) throw new Error(`[RESETING] : Failed to delete todo ${id} in migration !`);
    }
    console.log("[RESETING] : Done !");
}

function* todoGenerator(): Generator<Todo> {
    const titles = [
        "Learn React",
        "Learn Deno",
        "Learn Hono",
        "Learn htmx",
        "Learn Typescript",
        "Learn Tailwindcss",
        "Learn Git",
        "Learn Docker",
        "Learn Kubernetes",
        "Learn AWS",
    ];
    let id = 0;
    while (true) {
        yield {
            id: ++id,
            title: titles[id % titles.length],
            completed: id % 2 === 0,
        };
    }
}

for (const todo of todoGenerator().take(limit)) {
    const newTodos = await db.addTodo(todo);
    if (!newTodos) throw new Error("Failed to update todo in migration !");
}
