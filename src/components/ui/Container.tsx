export const Container = ({ children, id }: { children: any; id?: string | number }) => {
    return (
        <section
            id={id ? String(id) : undefined}
            class="rounded-lg ring-1 ring-stone-400 py-2 px-4 bg-stone-700 space-y-1 shadow-lg shadow-black">
            {children}
        </section>
    );
};
