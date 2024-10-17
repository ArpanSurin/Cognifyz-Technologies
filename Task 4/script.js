const colorchange = document.querySelector(".btn");
const body =document.querySelector(".elem");

colorchange.addEventListener("click", () => {
    body.classList.toggle("active");
});

