import db from "@/db/index.ts";
import { ensureFileSync } from "jsr:@std/fs";

// Synchronously ensures that the file exists.
// If the file already exists, this function does nothing. If the parent directories for the file do not exist, they are created.
ensureFileSync(db.JSON_PATH);

// reset the todos
const askReset = Deno.args[0] === "--reset";

// limit the number of todos generated (default 10)
const limit = Deno.args[1] ? parseInt(Deno.args[1]) : 10;

// reset the todos
if (askReset) {
    Deno.writeFileSync(db.JSON_PATH, new Uint8Array());
    console.log("[RESETING] : Done !");
}

// The todo generator function
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

// Add todos one by one over IteratorObject limit as range
for (const todo of todoGenerator().take(limit)) {
    const newTodos = await db.addTodo(todo);
    if (!newTodos) throw new Error("Failed to update todo in migration !");
}
