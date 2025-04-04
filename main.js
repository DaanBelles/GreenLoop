document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".cta, .card");
    
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.cursor = "pointer";
        });
    });
});
