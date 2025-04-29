// @ts-check

window.addEventListener('DOMContentLoaded', init);

function init() {
  /** @type {HTMLImageElement | null} */
  const hornImage = document.querySelector("#expose > img");
  /** @type {HTMLImageElement | null} */
  const volumeImage = document.querySelector("#volume-controls > img");
  /** @type {HTMLInputElement | null} */
  // @ts-ignore
  const volumeInput = document.getElementById("volume");
  const select = document.getElementsByTagName("select")[0];
  const audio = document.getElementsByTagName("audio")[0];
  const playButton = document.getElementsByTagName("button")[0];

  if (!hornImage || !volumeImage || !volumeInput) return;

  // @ts-ignore
  const jsConfetti = new JSConfetti();

  select.onchange = () => {
    audio.src = `assets/audio/${select.value}.mp3`;
    hornImage.src = `assets/images/${select.value}.svg`;
  };

  volumeInput.oninput = () => {
    const volume = parseFloat(volumeInput.value);

    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }

    audio.volume = volume / 100;
  }

  playButton.onclick = () => {
    audio.currentTime = 0;
    audio.play();

    if (select.value === "party-horn") {
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      });
    }
  };
}