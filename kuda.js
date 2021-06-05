const allInputs = document.querySelectorAll("input");
const moveCursor = (event, index) => {
    const { code } = event;
    if (code === "Backspace" && !event.target.value) {
        const nextInput = allInputs[index - 1];
        nextInput !== undefined && nextInput.focus();
    }
    if (event.target.value && index < allInputs.length) {
        const nextInput = allInputs[index + 1];
        nextInput !== undefined && nextInput.focus();
    }
};
allInputs.forEach((input, index) => {
    input.addEventListener("keyup", e => moveCursor(e, index));
});
