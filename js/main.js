let btn = document.querySelector(".header-btn-three");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    if (body.className === "white") {
        body.classList.replace("white", "dark")
    } else {
        body.classList.replace("dark", "white")
    }
})