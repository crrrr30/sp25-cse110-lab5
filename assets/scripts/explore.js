// @ts-check
// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /** @type {HTMLSelectElement | null} */
  // @ts-ignore
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.getElementsByTagName("button")[0];
  const textInput = document.getElementsByTagName("textarea")[0];
  /** @type {HTMLImageElement | null} */
  // @ts-ignore
  const image = document.getElementsByTagName("img")[0];

  if (!voiceSelect || !speakButton) return;

  const voices = window.speechSynthesis.getVoices();

  voices.forEach(voice => {
    let option = document.createElement('option');
    option.value = voice.name;
    option.text = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });

  speakButton.onclick = () => {
    if (textInput.value.length == 0) {
      alert("Input text is empty");
      return;
    }

    let utterance = new SpeechSynthesisUtterance();
    const voice = voices.find(voice => voice.name === voiceSelect.value);

    if (!voice) {
      alert("Please select a valid voice");
      return;
    }

    image.src = "assets/images/smiling-open.png";

    utterance.voice = voice;
    utterance.text = textInput.value;
    utterance.onend = () => image.src = "assets/images/smiling.png";
    window.speechSynthesis.speak(utterance);
  };
}
