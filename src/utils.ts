import { Context } from "hono";

/**
 * @description Get the body of a function
 */
export function getBodyFunction(fn: (...args: any) => any): string {
    const reg = /((\(([A-Za-z0-9]+)?\))=>{?)/g;
    const withLastBracket = fn.toString().replace(reg, "");
    const lastIndex = withLastBracket.lastIndexOf("}");
    const withoutLastBracket = withLastBracket.substring(0, lastIndex);
    return withoutLastBracket.replace(/(\s|\n)/g, "");
}

/**
 * @description Parse formdata to object
 */
export const parseFd = async <T>(c: Context): Promise<T> => {
    const formdata = await c.req.formData();
    return Object.fromEntries([...formdata.entries()]) as T;
};
