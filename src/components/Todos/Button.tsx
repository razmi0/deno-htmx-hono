export const Button = ({
    children,
    hxProps,
    className = "",
    variant = "ghost",
    id,
    type = "button",
}: {
    children?: any;
    hxProps?: HTMXProps;
    className?: string;
    variant?: "ghost" | "hidden" | "solid";
    id?: string;
    type?: "button" | "submit" | "reset";
}) => {
    const variants = {
        ghost: "bg-transparent p-0",
        hidden: "hidden",
        solid: "bg-blue-500 text-white px-4 py-2 rounded",
    };

    return (
        <button type={type} id={id} class={`${variants[variant]} ${className}`} {...hxProps}>
            {children}
        </button>
    );
};
