function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const changeTime = 1000;

startBtn.addEventListener('click', () => {
  const idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
  }, changeTime);

  stopBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', '');
  });
});
