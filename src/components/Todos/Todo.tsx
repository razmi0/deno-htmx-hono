import { DeleteIcon, HandleIcon, PlusIcon } from "@components/Icons.tsx";
import { Button } from "@components/Todos/Button.tsx";
import { Checkbox } from "@components/Todos/Checkbox.tsx";
import { Container } from "@components/Todos/Container.tsx";
import { Form } from "@components/Todos/Form.tsx";
import { Input } from "@components/Todos/Input.tsx";

export const Todolist = ({ todos }: { todos: Todo[] }) => {
    const hxProps = {
        "hx-put": "/todos",
        "hx-swap": "outerHTML",
        "hx-trigger": "end",
    };
    return (
        <Form
            isSortable
            hxProps={hxProps}
            className="[&>article:first-of-type]:rounded-t-lg [&>article:last-of-type]:rounded-b-lg group">
            <p class={`text-center visible group-[:has(article)]:invisible`}>No todos found</p>
            {todos.map((td) => (
                <Todo {...td} />
            ))}
        </Form>
    );
};

export const Todo = ({ id, title, completed, className }: Todo & { className?: string }) => {
    const hxProps: Record<"button" | "input", HTMXProps> = {
        button: {
            "hx-delete": `/todos/${id}`,
            "hx-target": `closest form`,
            "hx-swap": "outerHTML",
        },
        input: {
            "hx-trigger": "change",
            "hx-put": "/todos",
            "hx-swap": "outerHTML",
            "hx-target": `closest form`,
        },
    };

    return (
        <Container id={`todo-${id}`} className={className}>
            <div class="flex items-center justify-between gap-3">
                <p class={"m-0 p-0"}>{id}</p>
                <HandleIcon />
                <Input name={`todo-${id}`} value={id} variant="hidden" />
                <Input name={`title-${id}`} value={title} hxProps={hxProps.input} />
                <Checkbox checked={completed} name={`completed-${id}`} hxProps={hxProps.input} />
                <Button variant="ghost" hxProps={hxProps.button}>
                    <DeleteIcon className="size-5" />
                </Button>
            </div>
        </Container>
    );
};

export const AddTodo = () => {
    const hxProps = {
        "hx-post": "/todos",
        "hx-swap": "beforeend",
        "hx-target": "previous form",
    };
    return (
        <Container className="mt-5">
            <Form className="flex items-center justify-between gap-3" hxProps={hxProps}>
                <Input placeholder="Add todo.." name="title" />
                <Checkbox />
                <Button type="submit">
                    <PlusIcon className="size-5" />
                </Button>
            </Form>
        </Container>
    );
};
