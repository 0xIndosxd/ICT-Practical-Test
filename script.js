const titleIdle = document.getElementById("TitleIdle");
const title = document.getElementById("Title");
const wordTitle = ["Imagination", "Smile", "Friends", "Roblox"]

// SLEEP FUNCTION
async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

// KEYBOARD THINGY
async function titleIdle_animation() {
    titleIdle.innerText = titleIdle.innerText.slice(0, -1);
    titleIdle.innerText = titleIdle.innerText + '|';
    await sleep(0.5);
    titleIdle.innerText = titleIdle.innerText.slice(0, -1);
    await sleep(0.5);
    titleIdle.innerText = titleIdle.innerText + '|';
    await sleep(0.5);
    return "Success";
}

// TITLE WORD CHANGE STUFF
async function placeTitle(word) {
    for (let i = 0; i < word.length; i++) {
        title.innerText = title.innerText + word[i];
        await sleep(0.05);
    }
    return "Success";
}

async function clearTitle() {
    for (let i = title.innerText.length; i > 0 ; i--) {
        title.innerText = title.innerText.slice(0, -1);
        await sleep(0.05);
    }
    return "Success";
}

async function change_title() {
    while(true) {
        for (let i = 0; i < wordTitle.length; i++) {
            await placeTitle(wordTitle[i]);
            await titleIdle_animation();
            await clearTitle();
        }
    }
}

// EXECUTE
change_title();