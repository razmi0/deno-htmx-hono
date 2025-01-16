import { Context } from "hono";

export function getBodyFunction(fn: (...args: any) => any): string {
    const reg = /((\(([A-Za-z0-9]+)?\))=>{?)/g;
    const withLastBracket = fn.toString().replace(reg, "");
    const lastIndex = withLastBracket.lastIndexOf("}");
    const withoutLastBracket = withLastBracket.substring(0, lastIndex);
    return withoutLastBracket.replace(/(\s|\n)/g, "");
}

export const parseFd = async <T>(c: Context): Promise<T> => {
    const formdata = await c.req.formData();
    return Object.fromEntries([...formdata.entries()]) as T;
};
