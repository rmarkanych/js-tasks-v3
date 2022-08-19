const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const delay = 1000;

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', () => {
  const idInterval = setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
  }, delay);

  stopBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', '');
  });
});
