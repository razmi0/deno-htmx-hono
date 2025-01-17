import * as esbuild from "https://deno.land/x/esbuild@v0.20.1/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.1";

async function watch() {
    const ctx = await esbuild.context({
        plugins: [...denoPlugins()],
        entryPoints: ["src/public/index.ts"],
        minify: true,
        outfile: ".client/index.js",
        bundle: true,
        loader: { ".ts": "ts" },
    });

    await ctx.watch();
    console.log("Watching...");
}

watch();
