import { Notify } from 'notiflix/build/notiflix-notify-aio';

const submitBtn = document.querySelector('button[type="submit"]');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  for (let i = 0; i < inputAmount.value; i++) {
    createPromise(i + 1, +inputDelay.value + +inputStep.value * i)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
  }
  form.reset();
});
