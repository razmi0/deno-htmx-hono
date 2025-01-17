/* eslint @typescript-eslint/no-explicit-any: "off" */
console.log('hono@^4.6.16", htmx.org@2.0.4', "deno@2.1.5");
// htmx.logAll();

// @ts-ignore htmx is exposed
htmx.onLoad(function (content) {
    console.log("htmx loaded", content);

    const sortables = content.querySelectorAll(".sortable");
    for (let i = 0; i < sortables.length; i++) {
        const sortable = sortables[i];
        //@ts-ignore Sortable is available
        const sortableInstance = new Sortable(sortable, {
            animation: 150,
            ghostClass: "blue-background-class",

            // Make the `.htmx-indicator` unsortable
            filter: ".htmx-indicator",
            onMove: function (evt: any) {
                return evt.related.className.indexOf("htmx-indicator") === -1;
            },

            // Disable sorting on the `end` event
            onEnd: function (_evt: any) {
                this.option("disabled", true);
            },
        });

        // Re-enable sorting on the `htmx:afterSwap` event
        sortable.addEventListener("htmx:afterSwap", function () {
            sortableInstance.option("disabled", false);
        });
    }
});

document.body.addEventListener("keydown", function (evt) {
    if (evt.key !== "Enter") return;
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
    if (!isInput) return;
    target.blur();
    const nextInput = target.closest("article")?.nextElementSibling?.querySelector("input") as HTMLInputElement;
    if (!nextInput) {
        const firstInput = document.querySelector(`article input`) as HTMLInputElement;
        if (!firstInput) return;
        firstInput.focus();
    }

    nextInput.focus();
});
