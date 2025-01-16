console.log('hono@^4.6.16", htmx.org@2.0.4', "deno@2.1.5");
// @ts-ignore logAll is exposed
// htmx.logAll();

//@ts-ignore document is available
document.body.addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
        console.log("Enter key pressed");
        evt.preventDefault();
    }
    // if an input is focus we don't want to trigger a request
    //@ts-ignore document is available
    // if (document.activeElement instanceof HTMLInputElement) {
    //     evt.preventDefault();
    // }
});
