{
    /* <input
                    type="text"
                    value={title}
                    name={`title-${id}`}
                    class="bg-transparent p-0 w-[40ch]"
                    hx-trigger="change"
                    hx-put="/todos"
                    hx-swap="outerHTML"
                    hx-target={`closest form`}
                /> */
}

export const Input = ({
    name,
    placeholder = "",
    hxProps,
    className = "",
    variant = "ghost",
    value,
    id,
}: {
    name: string;
    placeholder?: string;
    hxProps?: HTMXProps;
    className?: string;
    variant?: "ghost" | "hidden";
    value?: string;
    id?: string;
}) => {
    const variants = {
        ghost: "bg-transparent p-0 w-[40ch]",
        hidden: "hidden",
    };
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            class={`${variants[variant]} ${className}`}
            value={value}
            id={id}
            {...hxProps}
        />
    );
};
