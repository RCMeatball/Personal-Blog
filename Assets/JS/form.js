const button = document.getElementById("ld");

function lightDark() {
    const body = document.body;
    body.classList.toggle("dark");
}

button.addEventListener('click', lightDark);