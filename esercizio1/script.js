var i = (sessionStorage.getItem("tempo")) ? sessionStorage.getItem("tempo") : 0;

setInterval(tempo, 1000);

function tempo() {
    i++

    document.querySelector("p").innerHTML = `${i} secondi di sessione aperta`;

    sessionStorage.setItem("tempo", i);
}