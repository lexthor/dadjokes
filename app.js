
document.addEventListener("DOMContentLoaded", joke);

document.getElementsByClassName("title-container")[0].onclick = joke;

async function joke() {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com/", config);
    let b = await a.json();
    document.getElementById("content").innerHTML = b.joke;
}
