function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let takinginput = false
document.addEventListener("DOMContentLoaded", async function() {

    lines = [document.getElementById("firstline"),document.getElementById("secondline"),document.getElementById("thirdline"),document.getElementById("fourthline"),document.getElementById("fifthline")];
    linetexts = ["starting...",">logging in...",">ERORR",">user not authenticated",">Please enter Your Password To Authenticate "];
    for (let i = 0; i < lines.length; i++) {
        line = lines[i]
        clinetext = linetexts[i]
        for (let i = 0; i < clinetext.length; i++) {
            await sleep(125)
            line.innerHTML += clinetext[i]
        }
        await sleep(750)
    }

});

