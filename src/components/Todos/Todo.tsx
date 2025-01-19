import { DeleteIcon, HandleIcon, PlusIcon } from "@components/Icons.tsx";
import { Button } from "@components/Todos/Button.tsx";
import { Checkbox } from "@components/Todos/Checkbox.tsx";
import { Container } from "@components/Todos/Container.tsx";
import { Form } from "@components/Todos/Form.tsx";
import { Input } from "@components/Todos/Input.tsx";

export const AddTodo = () => {
    const hxProps = {
        "hx-post": "/todos",
        "hx-swap": "outerHTML",
        "hx-target": "output#added",
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

export const Todo = ({ id, title, completed }: Todo) => {
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
        <Container id={`todo-${id}`}>
            <div class="flex items-center justify-between gap-3">
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
            className="[&>article:first-of-type]:rounded-t-lg [&>article:last-of-type]:rounded-b-lg">
            {todos.map((td) => (
                <Todo {...td} />
            ))}
            <output id="added" class={"hidden"}></output>
        </Form>
    );
};
