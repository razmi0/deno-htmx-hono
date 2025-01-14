const Button = ({
    children,
    add,
    hxPath,
    target,
}: {
    children: string;
    add: number;
    hxPath: string;
    target: string;
}) => {
    return (
        <button
            class="rounded-lg px-3 py-1 ring-1 ring-stone-500"
            hx-trigger="click"
            hx-get={`${hxPath}/${add}`}
            hx-target={target}
            hx-swap="outerHTML">
            {children}
        </button>
    );
};

let count = 0;
const Counter = ({ add = 0, hxPath, id }: { add?: number; hxPath: string; id: string }) => {
    count += add;
    return (
        <section id={id}>
            <div class="grid grid-cols-3 gap-2">
                <Button hxPath={hxPath} target={`section#${id}`} add={1}>
                    +
                </Button>
                <span class="font-bold content-center">{count}</span>
                <Button hxPath={hxPath} target={`section#${id}`} add={-1}>
                    -
                </Button>
            </div>
        </section>
    );
};

export default Counter;
