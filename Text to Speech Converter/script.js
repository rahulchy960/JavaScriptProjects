let speech = new SpeechSynthesisUtterance(); 
let voices = [];
let voiceSelect = document.querySelector("select");
let isPaused = false;
let initialState = document.getElementById("button")
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    if(window.speechSynthesis.speaking && !isPaused) {
        // If speech is currently speaking and not paused, pause it
        window.speechSynthesis.pause();
        isPaused = true;
        document.querySelector("button").textContent = "Resume";
    } 
    else if(isPaused){
        // If speech is paused, resume it
        window.speechSynthesis.resume();
        isPaused = false;
        document.querySelector("button").textContent = "Pause";
    } 
    else{
        // If speech is not speaking, start speaking
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
        isPaused = false;
        document.querySelector("button").textContent = "Pause";
        // If the speech is ended
        speech.onend = () => {
            isPaused = false;
            document.querySelector("button").textContent = "Listen";
        };
    }
});
