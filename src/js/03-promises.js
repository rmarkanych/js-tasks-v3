const submitBtn = document.querySelector('button[type="submit"]');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) resolve({ position, delay });
      else reject({ position, delay });
    }, delay);
  });
}

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  createPromise(2, 1500)
    .then(({ position, delay }) =>
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    )
    .catch(({ position, delay }) =>
      console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    );
});
