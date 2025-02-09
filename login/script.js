function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let takinginput = false
document.addEventListener("DOMContentLoaded", async function() {
    document.getElementById("waiter").style.backgroundColor = "Black";
    lines = [document.getElementById("firstline"),document.getElementById("secondline"),document.getElementById("thirdline"),document.getElementById("fourthline"),document.getElementById("fifthline")];
    linetexts = ["starting...",">logging in...",">ERORR",">user not authenticated",">Please enter Your Password To Authenticate "];
    for (let i = 0; i < lines.length; i++) {
        line = lines[i]
        clinetext = linetexts[i]
        for (let i = 0; i < clinetext.length; i++) {
            await sleep(125)
            line.innerHTML += clinetext[i]
        }
        await sleep(450)
    }
    takinginput = true
    document.getElementById("waiter").style.backgroundColor = "White"
    let waiter = document.getElementById("waiter")
    while (takinginput) {
        flick(waiter)
        await sleep(500)
    }

});

function flick(ttf) {
    if (ttf.style.backgroundColor === "white") {
        ttf.style.backgroundColor = "Black"
    }
    else if (ttf.style.backgroundColor === "black") {
        ttf.style.backgroundColor = "White"
    }
}
