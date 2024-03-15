const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pressedButton = button.textContent;

        if (button.id === "c") {
            pantalla.textContent = "0"
            return;
        }

        if(button.id === "borrar") {
            if(pantalla.textContent.length === 1 || pantalla.textContent ===
                 "¡Error!") {
                pantalla.textContent ="0";
            } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
            return;
        
        }

        if(button.id === "igual") {
            try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {pantalla.textContent = "¡Error!"

        }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent ===
        "¡Error!") {
            pantalla.textContent = pressedButton;     
        } else {
            pantalla.textContent += pressedButton;
        }
    })
})