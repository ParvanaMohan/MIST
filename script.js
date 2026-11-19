const rainButton = document.getElementById("rain-toggle");
const cafeButton = document.getElementById("cafe-toggle");
const lightingSelect = document.getElementById("lighting");
const timeSelect = document.getElementById("time-of-day");
const rainAudio = document.getElementById("rain-audio");
const cafeAudio = document.getElementById("cafe-audio");

const sceneTitle = document.getElementById("scene-title");
const sceneDescription = document.getElementById("scene-description");

const state = {
    rain: false,
    cafe: false,
    lighting: "warm",
    time: "evening"
};

const timeDetails = {
    morning: {
        title: "A Gentle Morning",
        description: "A fresh start, a clear mind, and a little sunlight."
    },
    afternoon: {
        title: "A Slow Afternoon",
        description: "Settle in and make room for your best ideas."
    },
    evening: {
        title: "A Quiet Evening",
        description: "Slow down, breathe, and find your rhythm."
    },
    night: {
        title: "A Peaceful Night",
        description: "Let the world grow quiet while you focus."
    }
};

function renderWorkspace() {
    document.body.dataset.lighting = state.lighting;
    document.body.dataset.time = state.time;

    sceneTitle.textContent = timeDetails[state.time].title;

    sceneDescription.textContent = timeDetails[state.time].description;

    rainButton.classList.toggle("active", state.rain);
    rainButton.textContent = state.rain ? "ON" : "OFF";
    rainButton.setAttribute("aria-pressed", String(state.rain));

    cafeButton.classList.toggle("active", state.cafe);
    cafeButton.textContent = state.cafe ? "ON" : "OFF";
    cafeButton.setAttribute("aria-pressed", String(state.cafe));
}
function controlAudio(audio, enabled) {
    if (enabled) {
        audio.play().catch(function () {
            console.log("Could not play audio. Check the audio file.");
        });
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

rainButton.addEventListener("click", function () {
    state.rain = !state.rain;
    renderWorkspace();
    controlAudio(rainAudio, state.rain);
});

cafeButton.addEventListener("click", function () {
    state.cafe = !state.cafe;
    renderWorkspace();
    controlAudio(cafeAudio, state.cafe);
});

lightingSelect.addEventListener("change", function () {
    state.lighting = lightingSelect.value;
    renderWorkspace();
});

timeSelect.addEventListener("change", function () {
    state.time = timeSelect.value;
    renderWorkspace();
});

renderWorkspace();