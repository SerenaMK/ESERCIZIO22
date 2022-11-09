var log = document.getElementById("log");
var del = document.getElementById("del");

log.addEventListener("click", function() {
    var user = document.getElementById("input").value;

    if(!user) {
        return document.querySelector("p").innerHTML = `<i>Attenzione! Campo non compilato.</i>`;
    }

    localStorage.setItem("usr", user);

    document.querySelector("p").innerHTML = `Ciao, ${user}`;
})

del.addEventListener("click", function() {
    localStorage.clear();
    document.getElementById("input").value = "";
    document.querySelector("p").innerHTML = "";
})