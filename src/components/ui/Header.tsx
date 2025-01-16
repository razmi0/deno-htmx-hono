const links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/counter",
        label: "Counter",
    },
    {
        href: "/todos",
        label: "Todos",
    },
];

export const Header = () => {
    return (
        <header>
            <nav>
                <ul class="flex gap-3">
                    {links.map((link) => (
                        <li>
                            <a class="hover:underline" href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
