import { Head } from "@/pages/layout/Head.tsx";

export const Layout = ({ children, title }: { children: any; title: string }) => {
    return (
        <html lang="en">
            <Head>{title}</Head>
            <body>{children}</body>
        </html>
    );
};
