// import { DeleteIcon } from "@components/icons/DeleteIcon.tsx";
// import { PlusIcon } from "@components/icons/PlusIcon.tsx";

// const Item = ({ title, completed, id, formTarget }: Todos & { formTarget: `form#${string}` }) => {
//     const ItemCheckbox = () => (
//         <input
//             type="checkbox"
//             name="completed"
//             checked={completed}
//             hx-put={`/todos/update/${id}`}
//             hx-target={`${formTarget}`}
//             hx-swap="outerHTML"
//         />
//     );

//     const DeleteButton = () => (
//         <button
//             class="bg-transparent p-0"
//             hx-delete={`/todos/delete/${id}`}
//             hx-target={`${formTarget}`}
//             hx-swap="outerHTML">
//             <DeleteIcon className="size-5" />
//         </button>
//     );
//     return (
//         <div class={"grid grid-cols-2 gap-2 justify-items-end text-left"}>
//             <label for={`todo-${id}`} class={"w-full"}>
//                 {title}
//             </label>
//             <div class={"flex items-center gap-2"}>
//                 <ItemCheckbox />
//                 <DeleteButton />
//             </div>
//         </div>
//     );
// };

// const AddTodo = ({ formTarget }: { formTarget: string }) => {
//     const AddButton = () => {
//         return (
//             <button class="bg-transparent p-0" type="submit">
//                 <PlusIcon className="size-5" />
//             </button>
//         );
//     };
//     return (
//         <form class="flex justify-between" hx-post="/todos" hx-target={formTarget} hx-swap="outerHTML">
//             <input type="text" placeholder="Add todo.." class={"bg-transparent"} name="title" />
//             <div class={"flex items-center gap-2"}>
//                 <input type="checkbox" name="completed" />
//                 <AddButton />
//             </div>
//         </form>
//     );
// };
