import { DeleteIcon } from "@components/icons/DeleteIcon.tsx";
import { PlusIcon } from "@components/icons/PlusIcon.tsx";

export type Todos = {
    id: number;
    title: string;
    completed: boolean;
};

export const TodosContainer = ({ todos }: { todos: Todos[] }) => {
    const target = "todos";
    return (
        <section class="rounded-lg ring-1 ring-stone-400 py-2 px-4 bg-stone-700" id={target}>
            <ul class="space-y-1">
                {todos.map((todo) => (
                    <Item {...todo} target={target} />
                ))}
                <hr />
                <li>
                    <AddTodo target={`section#${target}`} />
                </li>
            </ul>
        </section>
    );
};

const Item = ({ title, completed, id, target }: Todos & { target: string }) => {
    const Input = () => <input type="checkbox" checked={completed} id={`todo-${id}`} />;

    const DeleteButton = () => (
        <button
            class="bg-transparent p-0"
            hx-delete={`/todos/delete/${id}`}
            hx-target={`section#${target}`}
            hx-swap="outerHTML">
            <DeleteIcon className="size-5" />
        </button>
    );
    return (
        <li class={"grid grid-cols-2 gap-2 justify-items-end text-left"}>
            <label for={`todo-${id}`} class={"w-full"}>
                {title}
            </label>
            <div class={"flex items-center gap-2"}>
                <Input />
                <DeleteButton />
            </div>
        </li>
    );
};

const AddTodo = ({ target }: { target: string }) => {
    const AddButton = () => {
        return (
            <button class="bg-transparent p-0" type="submit">
                <PlusIcon className="size-5" />
            </button>
        );
    };
    return (
        <form class="flex justify-between" hx-post="/todos" hx-target={target} hx-swap="outerHTML">
            <input type="text" placeholder="Add todo.." class={"bg-transparent"} name="title" />
            <div class={"flex items-center gap-2"}>
                <input type="checkbox" name="completed" />
                <AddButton />
            </div>
        </form>
    );
};
