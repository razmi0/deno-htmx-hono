export const Layout = ({ children, title }: { children: any; title: string }) => {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/index.css" />
                <script type="module" src="/index.js"></script>
                {/* htmx */}
                <script src="https://unpkg.com/htmx.org@2.0.4"></script>
                <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
                <title>{title}</title>
            </head>
            <body>
                {children}
                <footer></footer>
            </body>
        </>
    );
};
