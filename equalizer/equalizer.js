window.addEventListener("DOMContentLoaded", () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  const audioPlayer = document.getElementById("audioPlayer");
  const equalizerColumns = document.querySelectorAll(".equalizer-column");
  const playButton = document.getElementById("playButton");
  const audioFileInput = document.getElementById("audioFile");
  const downloadLink = document.getElementById("downloadLink");

  let dataArray;

  function visualize() {
    requestAnimationFrame(visualize);

    analyser.getByteFrequencyData(dataArray);

    equalizerColumns.forEach((column, index) => {
      const value = dataArray[index];
      column.style.backgroundColor = `rgb(0, ${255 - value}, 0)`;
    });
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      audioPlayer.src = e.target.result;
      audioPlayer.controls = true;
      audioPlayer.play();
    };

    reader.readAsDataURL(file);
  }

  function downloadFile() {
    const url = audioPlayer.src;
    const filename = url.substring(url.lastIndexOf("/") + 1);
    downloadLink.href = url;
    downloadLink.setAttribute("download", filename);
  }

  audioFileInput.addEventListener("change", handleFileSelect);
  playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      visualize();
    } else {
      audioPlayer.pause();
    }
  });

  audioPlayer.addEventListener("ended", () => {
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
  });

  audioPlayer.addEventListener("loadedmetadata", () => {
    const source = audioContext.createMediaElementSource(audioPlayer);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  });

  downloadLink.addEventListener("click", downloadFile);
});

const menuEl = document.querySelector(".mobileCategories__link.menuBtn");
const htmlEl = document.documentElement;

const closeMenuBM = e => {
  const target = e.target;
  console.log(menuEl);
  menuEl.classList.toggle("opened");
  if (menuEl.classList.contains("opened")) {
    htmlEl.classList.remove("sidebar_open");
  }
  console.log(target);
};

menuEl.addEventListener("click", closeMenuBM);

