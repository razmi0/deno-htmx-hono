import { Header } from "@/components/Header.tsx";
import { Fragment } from "hono/jsx";

export const HomePage = ({ bigTitle }: { bigTitle: string }) => {
    return (
        <Fragment>
            <Header />
            <main>
                <h1>{bigTitle}</h1>
            </main>
            <footer></footer>
        </Fragment>
    );
};
