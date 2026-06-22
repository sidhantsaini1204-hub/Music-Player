                // Elements

const playBtn = document.querySelector(".play-btn");
const playIcon = document.querySelector(".play-btn i");

const albumCover = document.querySelector(".album-cover");

const progressBar = document.querySelector(
".progress-section input"
);

const volumeBar = document.querySelector(
".volume-section input"
);

const controlButtons = document.querySelectorAll(
".controls button"
);

                // Variables 

let isPlaying = false;
let progress = 0;
let progressInterval;

                // Play or pause

playBtn.addEventListener("click", () => {

    if (!isPlaying) {

        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");

        albumCover.classList.add("playing");

        document.title = "🎵 Now Playing";

        progressInterval = setInterval(() => {

            if (progress < 100) {
                progress++;
                progressBar.value = progress;
            }

        }, 200);

        isPlaying = true;

    } else {

        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");

        albumCover.classList.remove("playing");

        document.title = "Music Player";

        clearInterval(progressInterval);

        isPlaying = false;
    }
});

                //  Previous button

controlButtons[0].addEventListener("click", () => {

    progress = 0;
    progressBar.value = 0;

    alert("Previous Song");

});

                // Next button

controlButtons[2].addEventListener("click", () => {

    progress = 0;
    progressBar.value = 0;

    alert("Next Song");

});

                // Progress bar

progressBar.addEventListener("input", () => {

    progress = progressBar.value;

});

                // Volume control

volumeBar.addEventListener("input", () => {

    console.log(
        "Volume:",
        volumeBar.value + "%"
    );

});

                // Button effect on clicking

controlButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.9)";

        setTimeout(() => {

            button.style.transform = "";

        }, 150);

    });

});

                // Album hover

albumCover.addEventListener("mouseenter", () => {

    albumCover.style.filter =
    "brightness(110%)";

});

albumCover.addEventListener("mouseleave", () => {

    albumCover.style.filter =
    "brightness(100%)";

});

                // Page loading animation

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

                // Keyboard shortcut

    // Spacebar = Play/Pause

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        playBtn.click();
    }

});

//    search songs

const searchInput = document.getElementById("songSearch");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const songs =
        document.querySelectorAll(".song-row");

        songs.forEach(song => {

            const text =
            song.textContent.toLowerCase();

            if(text.includes(value)){
                song.style.display = "flex";
            }else{
                song.style.display = "none";
            }

        });

    });

}