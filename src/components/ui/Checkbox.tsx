export const Checkbox = ({ checked }: { checked?: boolean }) => {
    return (
        <label class="flex justify-center items-center">
            <input
                class="peer cursor-pointer hidden after:opacity-100"
                type="checkbox"
                name="completed"
                checked={checked}
            />
            <span class="inline-block w-5 h-5 border-2 relative cursor-pointer after:content-[''] after:bg-green-600 after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100" />
        </label>
    );
};
