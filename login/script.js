function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener("keydown", async function(evt) {
    if (takinginput) {
        if (evt.key == "Enter") {
            checkpass(pass)
        }
        else if (evt.key == "Backspace" && pass.length > 0) {
            pass = pass.substring(0, pass.length - 1);
        }
        else if (evt.key.length < 2) {
            pass += evt.key
        }

    }
})
let takinginput = false
let pass = ""
document.addEventListener("DOMContentLoaded", async function() {
    document.getElementById("waiter").style.backgroundColor = "Black";
    lines = [document.getElementById("firstline"),document.getElementById("secondline"),document.getElementById("thirdline"),document.getElementById("fourthline"),document.getElementById("fifthline")];
    linetexts = ["starting...",">logging in...",">ERORR",">user not authenticated",">Please enter Your Password To Authenticate "];
    for (let i = 0; i < lines.length; i++) {
        line = lines[i]
        clinetext = linetexts[i]
        for (let i = 0; i < clinetext.length; i++) {
            await sleep(50)
            line.innerHTML += clinetext[i]
        }
        await sleep(400)
    }
    takinginput = true
    document.getElementById("waiter").style.backgroundColor = "White"
    let waiter = document.getElementById("waiter")
    while (takinginput) {
        flick(waiter)
        await sleep(500)
    }

});
function checkpass(password) {
    console.log(password)
}
function flick(ttf) {
    if (ttf.style.backgroundColor === "white") {
        ttf.style.backgroundColor = "Black"
    }
    else if (ttf.style.backgroundColor === "black") {
        ttf.style.backgroundColor = "White"
    }
}


