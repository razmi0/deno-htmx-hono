import { safe } from "@/utils.ts";

export const JSON_PATH = "src/db/todos.json";
const encode = (input?: string): Uint8Array => new TextEncoder().encode(input || "");
const decode = (input: Uint8Array): string => new TextDecoder().decode(input);
const write = (input: string): Promise<void> => Deno.writeFile(JSON_PATH, encode(input));
const read = (): Promise<Uint8Array> => Deno.readFile(JSON_PATH);

export default {
    JSON_PATH,
    /* Read all todos */
    readTodos: async (): Promise<Todo[] | false> => {
        return await safe(async () => {
            const content = await read();
            const decoded = decode(content);
            return JSON.parse(decoded || "[]");
        }, "readTodos");
    },

    /* Update a todo */
    updateTodo: async (todo: Todo): Promise<Todo[] | false> => {
        return await safe(async () => {
            const oldTodos = JSON.parse(decode(await read()) || "[]");
            const newTodos = oldTodos.map((oldTodo: Todo) => (oldTodo.id === todo.id ? todo : oldTodo));
            await write(JSON.stringify(newTodos));
            return newTodos;
        }, "updateTodo");
    },

    updateAllTodos: async (todos: Todo[]): Promise<Todo[] | false> => {
        return await safe(async () => {
            await write(JSON.stringify(todos));
            return todos;
        }, "updateAllTodos");
    },

    /* Delete a todo */
    deleteTodo: async (id: number): Promise<Todo[] | false> => {
        return await safe(async () => {
            const oldTodos = JSON.parse(decode(await read()) || "[]");
            const newTodos = oldTodos.filter((oldTodo: Todo) => oldTodo.id !== id);
            await write(JSON.stringify(newTodos));
            return newTodos;
        }, "deleteTodo");
    },

    /* Create a todo */
    createTodo: async (todo: Partial<Todo>): Promise<number | false> => {
        return await safe(async () => {
            const oldTodos = JSON.parse(decode(await read()) || "[]");
            const newTodo = {
                completed: todo.completed || false,
                title: todo.title || "blank",
                id: oldTodos.length + 1,
            };
            const newTodos = [...oldTodos, newTodo];
            await write(JSON.stringify(newTodos));
            return newTodo.id;
        }, "createTodo");
    },

    /* Add a todo */
    addTodo: async (todo: Todo): Promise<Todo[] | false> => {
        return await safe(async () => {
            const oldTodos = JSON.parse(decode(await read()) || "[]");
            const newTodos = [...oldTodos, todo];
            await write(JSON.stringify(newTodos));
            return newTodos;
        }, "addTodo");
    },
};
