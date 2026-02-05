let textInput = document.getElementById("text");
let speedInput = document.getElementById("speed");
let volumeInput = document.getElementById("volume");
let voiceSelect = document.getElementById("voice");
let button = document.getElementById("speak");

button.addEventListener("click", function () {

  let speech = new SpeechSynthesisUtterance(textInput.value);

  speech.rate = speedInput.value;


  speech.volume = volumeInput.value;


  let voices = speechSynthesis.getVoices();

  if (voiceSelect.value === "female") {
    speech.voice = voices.find(v => v.name.toLowerCase().includes("female")) || voices[0];
  } else {
    speech.voice = voices.find(v => v.name.toLowerCase().includes("male")) || voices[0];
  }

  speechSynthesis.cancel(); // чтобы не накладывались голоса
  speechSynthesis.speak(speech);
});
