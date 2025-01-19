console.log('hono@^4.6.16", htmx.org@2.0.4', "deno@2.1.5");

htmx.onLoad(function (_content: any) {
    const sortables = document.querySelectorAll(".sortable") as NodeListOf<HTMLElement>;
    for (let i = 0; i < sortables.length; i++) {
        const sortable = sortables[i];
        const sortableInstance = new Sortable(sortable, {
            animation: 150,
            ghostClass: "blue-background-class",
            handle: ".handle",
            dragClass: "sortable-dragged",
            // Make the `.htmx-indicator` unsortable
            filter: ".htmx-indicator",
            onMove: (evt: any) => evt.related.className.indexOf("htmx-indicator") === -1,
        });

        // Re-enable sorting on the `htmx:afterSwap` event
        sortable.addEventListener("htmx:afterSwap", () => {
            sortableInstance.option("disabled", false);
        });
    }
});

/*
 * Focus the next input on Enter key press and prevent form submission
 */
document.body.addEventListener("keydown", function (evt) {
    if (evt.key !== "Enter") return;
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
    if (!isInput) return;
    target.blur();
    const nextInput = target.closest("li")?.nextElementSibling?.querySelector("input") as HTMLInputElement;
    if (!nextInput) {
        const firstInput = document.querySelector(`li article form input`) as HTMLInputElement;
        if (!firstInput) return;
        firstInput.focus();
    }
    nextInput.focus();
});
