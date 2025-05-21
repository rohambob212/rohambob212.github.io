function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// keydown event listener removed

async function hash(str) { // Changed 'message' to 'str' here
    // Encode the message as a Uint8Array
    const msgBuffer = new TextEncoder().encode(str); // Corrected: use str

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

// let takinginput = false; // Removed
// let pass = ""; // Removed

document.addEventListener("DOMContentLoaded", async function() {
    document.getElementById("waiter").style.backgroundColor = "Black";
    let lines = [document.getElementById("firstline"),document.getElementById("secondline"),document.getElementById("thirdline"),document.getElementById("fourthline"),document.getElementById("fifthline")];
    let linetexts = ["starting...",">logging in...",">ERORR",">user not authenticated",">Please enter Your Password To Authenticate "];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let clinetext = linetexts[i];
        for (let j = 0; j < clinetext.length; j++) { 
            await sleep(50);
            line.innerHTML += clinetext[j];
        }
        await sleep(400);
    }
    document.getElementById("waiter").style.backgroundColor = "White";
    let hiddenInput = document.getElementById("hiddenPasswordInput");
    hiddenInput.focus();

    hiddenInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            hiddenInput.value = ""
            checkpass();
        }
    });
    // The rest of the logic related to 'takinginput' and 'flick' has been removed.
});

function checkpass() { // Removed password argument
    let password = document.getElementById("hiddenPasswordInput").value; 
    let rpass = "fdc961aa1696d20c6d04256a2efac0177c50cf61511fa71f06dd47f102780bde"; // This is hash of "correct"
    
    hash(password).then(hashedPassword => {
        if (hashedPassword === rpass) {
            alert("congrats! (this is temporary)");
        } else {
            alert("wrong password");
            window.open('', '_self').close();
        }
    }).catch(error => {
        console.error("Error hashing password:", error);
        alert("Error processing password.");
    });
}

// function flick(ttf) { // Removed as it's no longer used
// }
