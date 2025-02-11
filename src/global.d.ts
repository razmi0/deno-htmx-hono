import "typed-htmx";

// A demo of how to augment foreign types with htmx attributes.
// In this case, Hono sources its types from its own namespace, so we do the same
// and directly extend its namespace.
declare module "hono/jsx" {
    namespace JSX {
        interface HTMLAttributes extends HtmxAttributes {}
    }
}

declare global {
    type Todo = {
        id: string;
        title: string;
        completed: boolean;
    };

    // type HTMXProps = {
    //     [key in keyof HtmxAttributes]?: string;
    // } & {
    //     "hx-boost"?: BoolStr;
    // };

    type HTMXProps = {
        [K in keyof HtmxAttributes]?: HtmxAttributes[K];
    };
}
