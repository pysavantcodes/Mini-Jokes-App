const fetched = async() => {
    try {
        const data = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            }
        });

        const jsonData = await data.json();

        document.getElementById("text").style.background = "rgb(123, 123, 123)";
        document.getElementById("text").style.color = "white";
        document.getElementById("text").textContent = jsonData.joke;


    } catch (e) {
        document.getElementById("text").style.background = "red";
        document.getElementById("text").style.color = "rgba(255, 255, 255, 0.8)";

        document.getElementById("text").textContent = "Cannot connect to server, Check Connection and Retry!! ❌";

    }

}

document.querySelector(".switch").addEventListener("click", () => {

    document.querySelector(".switch").classList.toggle("white");
    document.querySelector("body").classList.toggle("back");
    document.querySelector(".nav h3").classList.toggle("txt");
    document.querySelector(".switch p").classList.toggle("txt");
    document.querySelector(".joke button").classList.toggle("txt");
    document.getElementById("text").classList.toggle("op");

    if (document.querySelector(".switch p").textContent == "Dark Mode") {
        document.querySelector(".switch p").textContent = "Light Mode";
    } else {
        document.querySelector(".switch p").textContent = "Dark Mode";
    }
})