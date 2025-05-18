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

async function hash(str) {
    // Encode the message as a Uint8Array
    const msgBuffer = new TextEncoder().encode(message);

    // Hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // Convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // Convert bytes to hex string
    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

    return hashHex;
}
async function apiget(url) {
    let response;
    response = await fetch(url);
    return await response.json();
}
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
    let rpass
            rpass = "fdc961aa1696d20c6d04256a2efac0177c50cf61511fa71f06dd47f102780bde"
            if (hash(password) === rpass) {
                alert("congrats! (this is temporary)")
            }
            else {
                alert("wrong password")
                window.open('', '_self').close()
            }


}
function flick(ttf) {
    if (ttf.style.backgroundColor === "white") {
        ttf.style.backgroundColor = "Black"
    }
    else if (ttf.style.backgroundColor === "black") {
        ttf.style.backgroundColor = "White"
    }
}


