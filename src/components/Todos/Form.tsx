export const Form = ({
    children,
    hxProps,
    className = "",
    id,
    isSortable = false,
}: {
    children?: any;
    hxProps?: HTMXProps;
    className?: string;
    id?: string;
    isSortable?: boolean;
}) => {
    return (
        <form id={id} class={`${isSortable ? "sortable" : ""} ${className}`} {...hxProps}>
            {children}
        </form>
    );
};
